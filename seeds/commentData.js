const { Comment } = require("../models");

const commentData = [
  {
    body: "Seed Comment 1",
    blogpost_id: "1",
    user_id: "3",
  },
  {
    body: "Seed Comment 2",
    blogpost_id: "2",
    user_id: "3",
  },
  {
    body: "Seed Comment 3",
    blogpost_id: "3",
    user_id: "1",
  },
  {
    body: "Seed Comment 4",
    blogpost_id: "4",
    user_id: "4",
  },
  {
    body: "Seed Comment 5",
    blogpost_id: "5",
    user_id: "2",
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
