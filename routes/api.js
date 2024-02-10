const express = require('express');
const router = express.Router();
const UserController = require('../app/controllers/UserController');

router.get('/api/users', UserController.getUsers);

module.exports = router;