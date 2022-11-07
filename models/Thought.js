const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
    {
        thoughtText: { type: String, required: true, min_length: 1, max_length: 280},
        // TODO: need to use a getter method to format the timestamp on query
        createdAt: { type: Date, default: Date.now},
        username: { type: String, required: true},
        // TODO: Array of nested documents created with the reactionSchema
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;