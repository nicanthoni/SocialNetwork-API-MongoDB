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

// /api/thoughts/:thoughtId/reactions
// [POST] to add a new reaction to a thought
router.route('/:thoughtId/reactions/').post(addReaction);

// [DELETE] to remove a reaction from a thought
router.route('/:thoughtId/reactions/').delete(removeReaction);

module.exports = router;