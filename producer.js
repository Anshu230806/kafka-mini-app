import kafka from "./client.js"

import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const producer = kafka.producer()

console.log("connecting to producer")
await producer.connect()

console.log("producer connected")
rl.setPrompt('> ')
rl.prompt()

rl.on('line', async function (line) {
    const [rider, location] = line.split(',')

    await producer.send({
        topic: 'rider-update',
        messages: [
            {
                partition: location.toLowerCase() === "north" ? 0 : 1,
                key: 'rider-update',
                value: JSON.stringify({ name: rider, loc: location })
            },
        ]
    })
}).on("close", async () => {
    await producer.disconnect()
})
