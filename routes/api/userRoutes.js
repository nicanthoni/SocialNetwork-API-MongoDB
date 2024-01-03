const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').put(updateUser);

// /api/users/:userId
router.route('/:userId').delete(deleteUser);


// /api/users/:userId/friends/:friendId -> add friend
router.route('/:userId/friends/:friendId').post(addFriend);

// /api/users/:userId/friends/:friendId -> remove friend
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;