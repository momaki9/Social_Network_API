const names = [
    'new001',
    'new002',
    'new003',
    'userone',
    'usertwo',
    'userthree',
    'userfour',
    "friendlyone",
    "friendlytwo",
    "friendlythree",
    "old009",
    "old008"
];


const helpfulThoughts = [
    "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled",
    "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born",
    "because occasionally circumstances occur in which toil and pain can procure him some great pleasure",
    "who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
];

const reactions = [
    "Lorem ipsum dolor sit amet",
    "Ut assumenda officiis sit esse magni ea",
    "Id voluptas ipsa non fuga dolor sit",
    "aspernatur quo enim debitis est illo reprehenderit",
    "Aut molestias dolores et ratione quia non accusantium",
    " hic tempore nobis et aspernatur recusandae"
]

const userNames = [
    "testing123",
    "testing129",
    "testing125",
    "testing120",
    "testing122",
    "testing124",
]

const getRandomArrItem = (array) => array[Math.floor(Math.random() * array.length)];

const randomName = () => getRandomArrItem(names);
const randomUser = () => getRandomArrItem(userNames);

const randomReaction = () => getRandomArrItem(reactions);

const randomThought = (value) => {
    const data = [];
    for (let index = 0; index < value; index++) {
        data.push({
            thoughtText: getRandomArrItem(helpfulThoughts),
            username: randomUser(),
            reactions: [...randomReaction()]
        });
    }
    return data;
};

module.exports = { randomName, randomThought }