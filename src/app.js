const express = require('express');
const { sequelize } = require('./models');
const userRoutes = require('./routes/userRoutes');
const tweetRoutes = require('./routes/tweetRoutes');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/tweets', tweetRoutes);
app.use('/api/auth', authRoutes);

// Add a test endpoint
app.get('/test', (req, res) => {
  res.send('Server is running!');
});

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await sequelize.sync();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();

module.exports = app;
