# RabbitMQ Producer and Consumer Example

This repository contains a simple Node.js application that demonstrates how to use RabbitMQ as a message broker. It includes a producer script that sends messages to a RabbitMQ queue and a consumer script that consumes messages from the same queue.

## Setup

1. **Install RabbitMQ using Docker:**
   
   ```bash
   docker run --name rabbitmq -p 5672:5672 rabbitmq
   ```

   This command will pull the RabbitMQ Docker image and start a RabbitMQ container listening on port 5672.

2. **Install Dependencies:**
   
   Run the following command to install the required dependencies for the Node.js scripts:

   ```bash
   npm install amqplib
   ```

## Producer

The producer script (`producer.js`) sends messages to the RabbitMQ queue.

### Usage

Run the producer script with the desired number of messages to send as an argument:

```bash
npm producer <messageCount>
```

Replace `<messageCount>` with the number of messages you want to send.

## Consumer

The consumer script (`consumer.js`) consumes messages from the RabbitMQ queue and performs a CPU-intensive task.

### Usage

Run the consumer script:

```bash
npm consumer
```

The consumer will listen for messages on the queue and process them as they arrive. Each message triggers a heavy computation task, simulating CPU-intensive processing.

---

Feel free to modify and expand upon this code as needed for your project. If you encounter any issues or have questions, please create an issue in this repository.

Happy messaging with RabbitMQ!
