'use strict';

const https = require('https');
const express = require('express');
const app = express();
const messageService = require("./message-service");

// setting the environment variables configuration
require('dotenv').config();

// listing to new messages
messageService.consume(process.env.MQ_EMAIL_QUEUE, message => {
    console.log("Message received: " + message.content.toString());
});

// setting the server options with the certificate and 
// certificate key in order to start our HTTPS server
https.createServer(app)
    .listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}!`)
    });
1