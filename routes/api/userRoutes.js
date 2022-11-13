const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  addFriends,
  deleteUser,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);
// TODO: test the newly added put and delete routes
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

//TODO: create route for adding friends
router.route('/:userId/friends/:friendId').post(addFriends);
module.exports = router;
