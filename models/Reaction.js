const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
        reactionBody: { type: String, required: true, max_length: 128},
        username: { type: String, required: true },
        // TODO: need to use a getter method to format the timestamp on query
        createdAt: { type: Date, default: Date.now}
    }
);

// TODO: schema settings > This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.

// const Reaction = model('reaction', reactionSchema);

module.exports = reactionSchema;