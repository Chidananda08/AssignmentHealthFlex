const express = require('express');
const { postTweet, getTimeline } = require('../controllers/tweetController');
const authMiddleware = require('../utils/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, postTweet);
router.get('/:userId/timeline', authMiddleware, getTimeline);

module.exports = router;
