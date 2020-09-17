const mongoose = require("mongoose");
mongoose.pluralize("null");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  nama: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  fotoUser: { type: String, required: true },
});

module.exports = mongoose.model("user", UserSchema);
