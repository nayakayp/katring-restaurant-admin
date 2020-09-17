const mongoose = require("mongoose");
const axios = require("axios");
const SERVER_ID = "SB-Mid-server-642FX_es-JcgwUeuaXoits14";
const db = mongoose.connection;

exports.pengguna_read = function (req, res) {
  res.render("pengguna.ejs", { pageName: "pengguna", layout: "layout" });
};

exports.pengguna_create = function (req, res) {
  res.send("Creating pengguna masih belum berfungsi");
};

exports.pengguna_update = function (req, res) {
  res.send("Updating pengguna masih belum berfungsi");
};

exports.pengguna_delete = function (req, res) {
  res.send("Deleting pengguna masih belum berfungsi");
};
