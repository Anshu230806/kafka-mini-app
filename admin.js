import kafka from './client.js'


async function init() {
    const admin = kafka.admin()
    console.log("connecting to admin")
    await admin.connect()
    console.log("admins connection success")

    console.log("creating topics")
    await admin.createTopics({
        topics: [{
            topic: 'rider-update',
            numPartitions: 2,
            replicationFactor: 1
        }]
    })

    console.log("topics created ")

    await admin.disconnect()
}


init()



