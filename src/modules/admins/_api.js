const isLoggedIn = require("../../shared/auth/isloggedIn");
const hasRole = require("../../shared/auth/hasRole");
const {
  login_admins,
  post_admins,
  get_admins,
  show_admins,
} = require("./_controller");

const router = require("express").Router();

router.post("/login", login_admins);
router.post("/admins", isLoggedIn, post_admins);
router.get("/admins", isLoggedIn, hasRole, get_admins);
router.get("/admins/:id", isLoggedIn, show_admins);

module.exports = router;
