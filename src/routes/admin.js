const express = require("express");
const router = express.Router();

// Import controller modules.
const dashboard_controller = require("../controllers/dashboardController");
const transaksi_controller = require("../controllers/transaksiController");
const produk_controller = require("../controllers/produkController");
const pengguna_controller = require("../controllers/penggunaController");
const profil_controller = require("../controllers/profilController");

// ADMIN ROUTES //

//GET request for _reading_ DASHBOARD
router.get("/", dashboard_controller.dashboard_read);

// GET request for _reading_ PROFIL
router.get("/editprofil", profil_controller.editprofil_read);

// POST request for _updating_PROFIL
router.post("/editprofil/:id/update", profil_controller.editprofil_update);

// GET request for _reading_ TRANSAKSI
router.get("/transaksi", transaksi_controller.transaksi_read);

// GET request for _reading_ TRANSAKSI DETAIL
router.get("/transaksi/:orderID", transaksi_controller.transaksiDetail_read);

// GET request for _reading_ at PRODUK PAGE
router.get("/produk", produk_controller.produk_read);

// POST request for _creating_ PRODUK
router.post("/produk/", produk_controller.produk_create);

// POST request for _updating_ PRODUK
router.post("/produk/:id/update", produk_controller.produk_update);

// POST request for _deleting_ PRODUK
router.post("/produk/:id/delete", produk_controller.produk_delete);

// POST request for _creating_ KATEGORI
router.post("/kategori", produk_controller.kategori_create);

// POST request for _updating_ KATEOGORI
router.post("/kategori/:id/update"), produk_controller.kategori_update;

// POST request for _deleting_ KATEGORI
router.post("/kategori/:id/delete", produk_controller.kategori_delete);

// GET request for _reading_ PENGGUNA
router.get("/pengguna/:id/create", pengguna_controller.pengguna_read);

// POST request for _create_ PENGGUNA
router.post("/pengguna/:id/create", pengguna_controller.pengguna_create);

// POST request for _updating_ PENGGUNA
router.post("/pengguna/:id/update", pengguna_controller.pengguna_update);

// POST request for _deleting_ PENGGUNA
router.post("/pengguna//:id/delete", pengguna_controller.pengguna_delete);

// GET request for _reading_ LOGIN
router.get("/login", (req, res) => {
  res.render("login.ejs", { layout: "layouts/entrance" });
});
