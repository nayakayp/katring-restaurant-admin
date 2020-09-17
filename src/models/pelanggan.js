const mongoose = require("mongoose");
mongoose.pluralize("null");
const Schema = mongoose.Schema;

const PelangganSchema = new Schema({
  namaPelanggan: { type: String, required: true },
  emailPelanggan: { type: String, required: true },
  perusahaanPelanggan: { type: String, required: true },
  alamatPelanggan: { type: String, required: true },
  kodepos: { type: Number, required: true },
  telponPelanggan: { type: Number, required: true },
  orderID: { type: String, required: true },
});

module.exports = mongoose.model("pelanggan", PelangganSchema);
