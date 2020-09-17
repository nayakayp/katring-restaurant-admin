const mongoose = require("mongoose");
mongoose.pluralize("null");
const Schema = mongoose.Schema;

const KategoriSchema = new Schema({
  nama: { type: String, required: true },
});

module.exports = mongoose.model("kategori", KategoriSchema);
