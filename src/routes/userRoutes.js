const express = require('express');
const { getUser } = require('../controllers/userController');
const authMiddleware = require('../utils/authMiddleware');
const router = express.Router();

router.get('/:userId', authMiddleware, getUser);

module.exports = router;
