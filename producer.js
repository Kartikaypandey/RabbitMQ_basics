const amqp = require('amqplib');

const queueName = 'jobs';
const messageCount = parseInt(process.argv[2]) || 10; // Number of messages to send

async function connect() {
    try {
        console.log(`Attempting connection`);
        const connection = await amqp.connect('amqp://localhost:5672');
        console.log(`Connection established`);

        console.log(`Creating channel`);
        const channel = await connection.createChannel();
        console.log(`Channel created`);

        console.log(`Asserting queue`);
        await channel.assertQueue(queueName);
        console.log(`Queue asserted`);

        console.log(`Sending ${messageCount} messages to queue`);

        // Send multiple messages to the queue
        for (let i = 0; i < messageCount; i++) {
            const msg = `Message ${i + 1}`;
            channel.sendToQueue(queueName, Buffer.from(msg));
            console.log(`Message ${i + 1} sent to queue`);
        }

        // Close the channel and connection after sending the messages
        setTimeout(() => {
            channel.close();
            connection.close();
            console.log('Channel and connection closed');
        }, 500);

    } catch (err) {
        console.error(`Error: ${err}`);
    }
}

connect();
