const router = require('express').Router();

const authRoutes = require('./auth-routes');
const comicRoutes = require('./comic-routes');

// API routes for user admin - signup, signin
router.use("/auth", authRoutes);

// API routes for other resources - post, favorite
router.use("/comic", comicRoutes);
module.exports = router;
