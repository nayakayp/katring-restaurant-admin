const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProdukSchema = new Schema({
  fotoProduk: { type: String, required: true },
  judulProduk: { type: String, required: true },
  hargaProduk: { type: String, required: true },
  deskripsiProduk: { type: String, required: true },
  kategoriProduk: { type: String, required: true },
  waktuPembuatan: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Produk", ProdukSchema);
