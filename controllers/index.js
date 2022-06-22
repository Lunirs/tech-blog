const router = require("express").Router();

const homepageRoutes = require("./homepageRoutes");
const dashboardRoutes = require("./dashboardRoutes");

router.use("/", homepageRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;
