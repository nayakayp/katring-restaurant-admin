const mongoose = require("mongoose");
mongoose.pluralize("null");
const Schema = mongoose.Schema;

const ProdukSchema = new Schema({
  fotoProduk: { type: String },
  judulProduk: { type: String, required: true },
  hargaProduk: { type: String, required: true },
  deskripsiProduk: { type: String, required: true },
  kategoriProduk: { type: String, required: true },
  waktuPembuatan: { type: Date, default: Date.now },
});

module.exports = mongoose.model("produk", ProdukSchema);
