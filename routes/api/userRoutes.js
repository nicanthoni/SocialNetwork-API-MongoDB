const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

// /api/users/:userId/friends/:friendId
// [POST] to add a new friend to a user's friend list
router.route('/:userId/friends/:friendId').post(addFriend);

// [DELETE] to remove a friend from a user's friend list
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;