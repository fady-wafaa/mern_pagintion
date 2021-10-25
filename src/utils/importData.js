require('dotenv').config();
const fs = require('fs');
const Post = require('../models/Post.Schema.js');
const connectDB = require('../helper/config/config.js');

connectDB();

const posts = JSON.parse(fs.readFileSync(`${__dirname}/posts.json`, 'utf-8'));

const importData = async () => {
  try {
    await Post.deleteMany({});
    await Post.insertMany(posts);

    console.log('DATA Done imported');
    process.exit();
  } catch (error) {
    console.log(`ERROR ${error}`);
    process.exit(1);
  }
};
module.exports = importData;
