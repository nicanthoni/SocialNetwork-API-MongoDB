const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController');

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought);

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').put(updateThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').delete(deleteThought);

// /api/thoughts/:thoughtId/reactions -> add a reaction to a thought
router.route('/:thoughtId/reactions/').post(addReaction);

// /api/thoughts/:thoughtId/reactions -> remove reaction from a thought
router.route('/:thoughtId/reactions/').delete(removeReaction);

module.exports = router;