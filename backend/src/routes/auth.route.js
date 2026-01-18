import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
  res.send("Sign up endpoint");
});
router.get("/login", (req, res) => {
  res.send("Login up endpoint");
});
router.get("/logout", (req, res) => {
  res.send("Log up endpoint");
});

export default router;
