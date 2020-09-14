const express = require("express");
const router = express.Router();

router.get("/editprofil", (req, res) => {
  res.render("editprofil.ejs", {});
});

router.get("/", (req, res) => {
  res.render("dashboard.ejs", { pageName: "dashboard" });
});

router.get("/transaksi", (req, res) => {
  res.render("transaksi.ejs", { pageName: "transaksi" });
});

router.get("/produk", (req, res) => {
  res.render("produk.ejs", {});
});

router.get("/pengguna", (req, res) => {
  res.render("pengguna.ejs", {});
});

module.exports = router;
