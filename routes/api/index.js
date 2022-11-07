const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;

// GET routes

// api/users

/* example
[
    {
        "thoughts": [
            "uuid"
        ],
        "friends": [
            "uuid"
        ],
        "_id:"
        "username":
        "email":
        "friendCount": 
    }
]

*/


// api/thoughts

/* example
[
    {
        "_id": "uuid",
        "thoughtText": "lorem ...",
        "username": "name",
        "createdAt":
        "reactions": [],
        "__v": 
        "reactionCount":
    }
]

*/


// SINGLE THOUGHT OR USER

// api/users/uuid



// api/thoughts/uuid

/*
    {
        "_id": "uuid",
        "thoughtText": "lorem ...",
        "username": "name",
        "createdAt":
        "reactions": [],
        "__v": 
        "reactionCount":
    }

*/