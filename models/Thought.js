const { Schema, model } = require('mongoose');


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
            [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
)

// getter method to format the timestamp on query
function formattedDate(createdAt) { }

// Initialize Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
