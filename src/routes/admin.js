const express = require("express");
const router = express.Router();

router.get("/editprofil", (req, res) => {
  res.render("editprofil.ejs", { pageName: "editprofil", layout: "layout" });
});

router.get("/", (req, res) => {
  res.render("dashboard.ejs", { pageName: "dashboard", layout: "layout" });
});

router.get("/transaksi", (req, res) => {
  res.render("transaksi.ejs", { pageName: "transaksi", layout: "layout" });
});

router.get("/transaksi/transaksi-detail", (req, res) => {
  res.render("transaksi-detail.ejs", {
    pageName: "transaksi",
    layout: "layouts/detail",
  });
});

router.get("/produk", (req, res) => {
  res.render("produk.ejs", { pageName: "produk", layout: "layout" });
});

router.get("/pengguna", (req, res) => {
  res.render("pengguna.ejs", { pageName: "pengguna", layout: "layout" });
});

router.get("/login", (req, res) => {
  res.render("login.ejs", { layout: "layouts/entrance" });
});

module.exports = router;
