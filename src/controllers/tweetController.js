const { Tweet } = require('../models');

exports.postTweet = async (req, res) => {
  const { text } = req.body;
  try {
    const tweet = await Tweet.create({ text, userId: req.user.userId });
    res.status(201).json(tweet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTimeline = async (req, res) => {
  const { userId } = req.params;
  try {
    const tweets = await Tweet.findAll({ where: { userId }, order: [['createdAt', 'DESC']] });
    res.json(tweets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
