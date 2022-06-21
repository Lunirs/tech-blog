const { User } = require("../models");

const userData = [
  {
    name: "Seed User 1",
    password: "seedpassword1",
  },
  {
    name: "Seed User 2",
    password: "seedpassword2",
  },
  {
    name: "Seed User 3",
    password: "seedpassword3",
  },
  {
    name: "Seed User 4",
    password: "seedpassword4",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
