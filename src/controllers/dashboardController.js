const mongoose = require("mongoose");
const axios = require("axios");
const SERVER_ID = "SB-Mid-server-642FX_es-JcgwUeuaXoits14";
const db = mongoose.connection;

exports.dashboard_read = function (req, res) {
  // Akses ke Database
  var allPelanggan = db.collection("pelanggan").find().toArray();
  allPelanggan
    .then((pelanggan) => {
      let datas = [];
      for (let i = 0; i < pelanggan.length; i++) {
        // Akses Midtrans Transaction Detail
        axios({
          method: "get",
          url: `https://api.sandbox.midtrans.com/v2/${pelanggan[i].orderID}/status`,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Basic " + Buffer.from(SERVER_ID).toString("base64"),
          },
        }).then((response) => {
          const namaPelanggan = pelanggan[i].namaPelanggan;

          const {
            transaction_time,
            va_numbers,
            gross_amount,
            transaction_status,
          } = response.data;

          tanggal = `${transaction_time.slice(8, 10)}/${transaction_time.slice(
            5,
            7
          )}/${transaction_time.slice(0, 4)}`;
          waktu = transaction_time.slice(10, -3);
          ch_pembayaran = va_numbers[0].bank.toUpperCase();
          total_pembayaran = Math.trunc(gross_amount)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

          status = transaction_status.toUpperCase();

          data = {
            tanggal,
            waktu,
            ch_pembayaran,
            namaPelanggan,
            total_pembayaran,
            status,
          };
          datas.push(data);
          if (datas.length == pelanggan.length) {
            res.render("dashboard.ejs", {
              pageName: "dashboard",
              layout: "layout",
              datas: datas,
            });
          }
        });
      }
    })
    .catch((err) => {
      return err;
    });
};

exports.login = function (req, res) {
  res.render("login.ejs", { layout: "layouts/entrance" });
};
