const amqp = require('amqplib');

const queueName = 'jobs';

// Function to simulate a CPU-intensive task
function heavyComputationTask() {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
        result += Math.sqrt(i);
    }
    return result;
}

async function connect() {
    try {
        const connection = await amqp.connect('amqp://localhost:5672');
        const channel = await connection.createChannel();
        await channel.assertQueue(queueName);

        channel.consume(queueName, async (message) => {
            if (message !== null) {
                console.log(`Received message with input: ${message.content.toString()}`);
                
                // Simulate heavy computation
                console.log('Performing heavy computation...');
                const result = heavyComputationTask();
                console.log('Heavy computation result:', result);
                
                // Acknowledge the message after processing
                channel.ack(message);
            }
        });

        console.log(`Waiting for messages...`);
    } catch (err) {
        console.error(`Error: ${err}`);
    }
}

connect();
