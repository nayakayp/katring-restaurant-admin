const User = require("../models/user");
const Produk = require("../models/produk");
const Pelanggan = require("../models/pelanggan");
const mongoose = require("mongoose");
const db = mongoose.connection;

exports.dashboard = function (req, res) {
  // Akses ke Midtrans
  res.render(
    res.render("dashboard.ejs", { pageName: "dashboard", layout: "layout" })
  );
};

exports.editprofil = function (req, res) {
  res.render("editprofil.ejs", { pageName: "editprofil", layout: "layout" });
};

exports.transaksi = function (req, res) {
  res.render("transaksi.ejs", { pageName: "transaksi", layout: "layout" });
};

exports.transaksiDetail = function (req, res) {
  res.render("transaksi-detail.ejs", {
    pageName: "transaksi",
    layout: "layouts/detail",
  });
};

exports.produk = function (req, res) {
  res.render("produk.ejs", { pageName: "produk", layout: "layout" });
};

exports.pengguna = function (req, res) {
  res.render("pengguna.ejs", { pageName: "pengguna", layout: "layout" });
};

exports.login = function (req, res) {
  res.render("login.ejs", { layout: "layouts/entrance" });
};
