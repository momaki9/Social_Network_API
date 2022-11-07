const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { randomName, randomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log("Connected to the Server and/or Database");
    await User.deleteMany({});
    await Thought.deleteMany({});

    const users = [];
    const thoughts = randomThought(4);
    
    for (let index = 0; index < 8; index++) {
        const username = randomName();
        const email = `${username}@halomail.com`;

        users.push({ username, email});
    }

    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    console.table(users);
    console.table(thoughts);
    console.info('🌱 complete');

    process.exit(0);
});