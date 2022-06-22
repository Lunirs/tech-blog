const router = require("express").Router();
const { Blogpost } = require("../models");

router.get("/", async (req, res) => {
  try {
    const blogpostData = await Blogpost.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const blogpost = blogpostData.map((blogpost) =>
      blogpost.get({ plain: true })
    );

    res.render("allBlogPostLoggedIn", {
      layout: "dashboard",
      blogpost,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/edit/:id", async (req, res) => {
  try {
    const blogpostData = await Blogpost.findByPk(req.params.id);

    const blogpost = blogpostData.get({ plain: true });

    res.render("editBlogPost", {
      layout: "dashboard",
      blogpost,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/new", async (req, res) => {
  try {
    res.render("newBlogPost", {
      layout: "dashboard",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
