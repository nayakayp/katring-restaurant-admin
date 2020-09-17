const mongoose = require("mongoose");
const axios = require("axios");
const SERVER_ID = "SB-Mid-server-642FX_es-JcgwUeuaXoits14";
const db = mongoose.connection;

exports.editprofil_read = function (req, res) {
  res.render("editprofil.ejs", { pageName: "editprofil", layout: "layout" });
};

exports.editprofil_update = function (req, res) {
  res.send("Edit profil belum berfungsi");
};
