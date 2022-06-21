const { Blogpost } = require("../models");

const blogpostData = [
  {
    title: "Seed Test 1",
    body: "Testing first blog post",
    user_id: "1",
  },
  {
    title: "Seed Test 2",
    body: "Testing second blog post",
    user_id: "2",
  },
  {
    title: "Seed Test 3",
    body: "Testing third blog post",
    user_id: "2",
  },
  {
    title: "Seed Test 4",
    body: "Testing fourth blog post",
    user_id: "3",
  },
  {
    title: "Seed Test 5",
    body: "Testing fifth blog post",
    user_id: "4",
  },
];

const seedBlogpost = () => Blogpost.bulkCreate(blogpostData);

module.exports = seedBlogpost;
