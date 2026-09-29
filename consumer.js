import kafka from './client.js'
const group = process.argv[2]

async function init() {
    const consumer = kafka.consumer({ groupId: group })
    await consumer.connect()

    await consumer.subscribe({ topics: ['rider-update'], fromBeginning: true })

    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log(`group: ${group} , topic: ${topic} , partiton: ${partition} , message: `, message.value.toString())
        },
    })
}

init()
