const { User } = require("../models");

const userData = [
  {
    name: "Seed User 1",
    email: "seedemail1@gmail.com",
    password: "seedpassword1",
  },
  {
    name: "Seed User 2",
    email: "seedemail2@gmail.com",
    password: "seedpassword2",
  },
  {
    name: "Seed User 3",
    email: "seedemail3@gmail.com",
    password: "seedpassword3",
  },
  {
    name: "Seed User 4",
    email: "seedemail4@gmail.com",
    password: "seedpassword4",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
