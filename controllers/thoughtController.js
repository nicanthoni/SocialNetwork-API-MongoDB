const { Thought, User } = require('../models');

module.exports = {
    // Get ALL thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Get a single thought
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
                .select('-__v');

            if (!thought) {
                return res.status(404).json({ message: 'Oops, no thoughts with that ID!' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // create a new thought & push the created thought's _id to the associated user's thoughts array field)
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            const user = await User.findOne({ _id: req.body.userId });

            if (!user) {
                return res.status(404).json({ message: 'No user with this Id, oops!' })
            }

            user.thoughts.push(thought._id);

            await user.save();

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Delete thought
    async deleteThought(req, res) {
    try {
        const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

        if (!thought) {
            return res.status(404).json({ message: 'No thought with that ID' });
        }
        res.json({ message: 'Thought sucessfully deleted!' })
    } catch (err) {
        res.status(500).json(err);
    }
},
    // UPDATE thought
    async updateThought(req, res) {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        );

        if (!thought) {
            return res.status(404).json({ message: 'No thought with this id!' });
        }

        res.json(thought);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
},
    // Add a new reaction to a thought 
    async addReaction(req, res) {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        );

        if (!thought) {
            return res.status(404).json({ message: 'No thought with this id, oops!' });
        }

        res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
},
    // Remove a reaction from a thought
    async removeReaction(req, res) {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: req.body } },
            { runValidators: true, new: true }
        );

        if (!thought) {
            return res.status(404).json({ message: 'No thought with this id, sorry!' });
        }

        res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
},
};