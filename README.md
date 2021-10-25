# SWORD Health Challenge - Worktask Email Queue Listener
This is simple project meant to listen to a message queue and print the received results.

### Minimum requirements
* Node 14.18.1
* Docker (if you want to run the application on a container)
* RabbitMQ queue service

### Environment variables
* **PORT**: Application port. Default: 8001
* **MQ_URL**: RabbitMQ URL. Default amqp://localhost
* **MQ_EMAIL_QUEUE**: RabbitMQ Email queue name. Default email_queue

### Building and Running
To build the project you must simply run the command:
* ``npm install``

To run the project you should use:
* ``npm run start``

### Docker
Feel free to get the lateste version of this application on my dockerhub repository:
* ``docker pull gabrieln/worktasksemail:1.0.0``

If you want to build an image from scratch, there's a Dockerfile on the root directory. To use it you can simply run:
* ``docker build -t your_user/worktasksemail:1.0.0 .``

To publish this image you should create a Dockerhub account and associate it to your local Docker instance. After that, you can simply run:
* ``docker push your_user/worktasksemail:1.0.0``

Para criar um novo container a partir dessa imagem basta utilizar o comando:
* ``docker run -d --name worktasks_email -p 8001:8001 gabrieln/worktasksemail:1.0.0``

If you want to build the application all at once, there's a Docker compose file on the root directory. To run it you can simply type the following command:
* ``docker-compose up -d``
