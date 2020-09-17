const mongoose = require("mongoose");
const Kategori = require("../models/kategori");
const Produk = require("../models/produk");
const multer = require("multer");
const db = mongoose.connection;

exports.produk_read = async function (req, res) {
  var produk = await db
    .collection("produk")
    .find()
    .toArray()
    .then((result) => {
      return result;
    });
  var kategori = await db
    .collection("kategori")
    .find()
    .toArray()
    .then((result) => {
      return result;
    });

  Promise.all([produk, kategori])
    .then((values) => {
      console.log(values);
      res.render("produk.ejs", {
        pageName: "produk",
        layout: "layout",
        produk: values[0],
        kategori: values[1],
      });
    })
    .catch((error) => {
      console.log(error.message);
    });
};

exports.produk_create = function (req, res) {
  const img = fs.readFileSync(req.file.path);
  const encode_image = img.toString("base64");

  var newProduk = new Produk({
    fotoProduk: "tes",
    judulProduk: req.body.nama,
    hargaProduk: req.body.harga,
    deskripsiProduk: req.body.deskripsi,
    kategoriProduk: req.body.kategori,
  });
  newProduk.save((err, doc) => {
    if (err) throw err;
    res.redirect("/produk");
  });
};

exports.produk_update = function (req, res) {
  res.send("Updating produk belum fungsi");
};

exports.produk_delete = function (req, res) {
  res.send("Deleting produk belum fungsi");
};

exports.kategori_create = function (req, res) {
  var newKategori = new Kategori({
    nama: req.body.kategori,
  });
  newKategori.save((err, doc) => {
    if (err) throw err;
    res.redirect("/produk");
  });
};

exports.kategori_update = function (req, res) {
  res.send("Updating kategori belum fungsi");
};

exports.kategori_delete = function (req, res) {
  res.send("Deleting kategori belum fungsi");
};
