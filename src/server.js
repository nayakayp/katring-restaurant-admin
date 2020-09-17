const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const mongoose = require("mongoose");
const DB_URI =
  "mongodb+srv://rest:Alhamdulillah29%23@cluster0.6ddyk.mongodb.net/katring?retryWrites=true&w=majority";

const adminRouter = require("./routes/admin");

const app = express();

// Connect to Database
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layouts/entrance");
app.set("layout", "layouts/detail");
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", adminRouter);

app.listen(3000, console.log("listening on 3000"));

module.exports = DB_URI;
