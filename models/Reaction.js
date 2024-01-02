const { Schema, Types } = require('mongoose');

// Reaction Schema
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            requried: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formattedDate
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

// getter method to format the timestamp on query
function formattedDate(createdAt) {}

module.exports = reactionSchema;