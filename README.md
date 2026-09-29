# Kafka Rider Update App

A mini event-driven application built with **Node.js, KafkaJS, and Apache Kafka** to understand the core concepts of Kafka, including topics, partitions, producers, consumers, and consumer groups.

## Overview

This project simulates a simple rider update system.

The application contains:

- A reusable Kafka client configuration
- A Kafka Admin for creating topics and configuring partitions
- A Producer for publishing rider update events
- A Consumer for consuming rider update events
- Two Kafka partitions based on rider location

The `rider-update` topic is configured with **2 partitions**:

- Partition 0 → North
- Partition 1 → South

For example:

```text
bill,north
tom,south

The producer sends the event to the appropriate partition based on the rider's location.

# Architecture


                  Kafka Broker
                       |
                rider-update topic
                  /           \
                 /             \
        Partition 0          Partition 1
           North                South
             \                   /
              \                 /
               Consumer Group


# Project Structure
Kafka-app/
│
├── client.js       # Kafka client configuration
├── admin.js        # Creates Kafka topics and partitions
├── producer.js     # Produces rider update events
├── consumer.js     # Consumes rider update events
├── package.json
└── README.md



#  Technologies Used
Node.js
Apache Kafka
KafkaJS
Docker
JavaScript (ES Modules)