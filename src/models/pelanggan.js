const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PelangganSchema = new Schema({
  namaPelanggan: { type: String, required: true },
  emailPelanggan: { type: String, required: true },
  perusahaanPelanggan: { type: String, required: true },
  alamatPelanggan: { type: String, required: true },
  telponPelanggan: { type: Number, required: true },
  metodePembayaran: { type: String, required: true },
  jumlahPembayaran: { type: Number, required: true },
  waktuTransaksi: { type: Date, default: Date.now },
  orderID: { type: String, required: true },
});

module.exports = mongoose.model("Pelanggan", PelangganSchema);
