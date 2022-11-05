const connection = require('../config/connection');
const { User } = require('../models');
const { randomName, randomReaction, randomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log("Connected to the Server and/or Database");
    await User.deleteMany({});
    // await Thought.deleteMany({});

    const users = [];
    const userReactions = randomReaction();
    
    for (let index = 0; index < 4; index++) {
        const username = randomName();
        const email = `${username}@halomail.com`;
        const thoughts = randomThought(4);
        const friends = randomName();

        users.push({ username, email, thoughts, friends});
    }

    await User.collection.insertMany(users);
    // await Thought.collection.insertOne({
    //     thoughtText: 
    // });

    console.table(users);
    console.table(userReactions);
    console.info('🌱 complete');

    process.exit(0);
})