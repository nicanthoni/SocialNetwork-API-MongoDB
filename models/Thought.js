const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// Schema for Thought Model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formattedDate
        },
        username: {
            type: String,
            required: true
        },
        reactions:
            [Reaction],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

// virtual reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    });

// getter method to format the timestamp on query
function formattedDate(createdAt) {}

// Initialize Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
