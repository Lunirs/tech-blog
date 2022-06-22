const sequelize = require("./config/connection");
const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");
const { User, Blogpost, Comment } = require("./models");

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.get("/", async (req,res) => {
  try {
  const blogpostData = await Blogpost.findAll({
    include: [{
        model: User,
        attributes: {exclude: ['password']}
    }],
  });
  
  const blogposts = blogpostData.map((blogpost) => blogpost.get({plain: true}));
  
  res.render("homepage", {blogposts});
  } catch(err) {
    res.status(500).json(err);
  }
});

app.get("/dashboard", async (req,res) => {
    try {
    const blogpostData = await Blogpost.findAll({
      include: [{
          model: User,
          attributes: {exclude: ['password']}
      }],
    });
    
    const blogpostdash = blogpostData.map((blogpost) => blogpost.get({plain: true}));
    
    res.render("dashboardpage", {
        layout: "dashboard",
        blogpostdash
    });
    } catch(err) {
      res.status(500).json(err);
    }
  });

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
