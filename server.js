const sequelize = require("./config/connection");
const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");
const { User, Blogpost, Comment } = require("./models");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 36000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//Home routes
app.get("/", async (req, res) => {
  try {
    const blogpostData = await Blogpost.findAll({
      include: [
        {
          model: User,
          attributes: { exclude: ["password"] },
        },
      ],
    });

    const blogposts = blogpostData.map((blogpost) =>
      blogpost.get({ plain: true })
    );

    res.render("allBlogPost", { blogposts });
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get("/blogpost/:id", async (req, res) => {
  try {
    const blogpostData = await Blogpost.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: { exclude: ["password"] },
            },
          ],
        },
      ],
    });

    const singleBlogPost = blogpostData.get({ plain: true });

    res.render("singleBlogPost", { singleBlogPost });
  } catch (err) {
    res.status(500).json(err);
  }
});

// dashbaord routes
app.get("/dashboard", async (req, res) => {
  try {
    const blogpostData = await Blogpost.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const blogpostdash = blogpostData.map((blogpost) =>
      blogpost.get({ plain: true })
    );

    res.render("dashboardpage", {
      layout: "dashboard",
      blogpostdash,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
