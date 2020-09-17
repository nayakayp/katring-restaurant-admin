const mongoose = require("mongoose");
const axios = require("axios");
const SERVER_ID = "SB-Mid-server-642FX_es-JcgwUeuaXoits14";
const db = mongoose.connection;

exports.transaksi_read = function (req, res) {
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
          const emailPelanggan = pelanggan[i].emailPelanggan;

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
          orderID = `${pelanggan[i].orderID}`;

          data = {
            orderID,
            tanggal,
            waktu,
            ch_pembayaran,
            emailPelanggan,
            total_pembayaran,
            status,
          };

          datas.push(data);

          if (datas.length == pelanggan.length) {
            res.render("transaksi.ejs", {
              pageName: "transaksi",
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

exports.transaksiDetail_read = function (req, res) {
  // Akses ke Database
  var detailPelanggan = db
    .collection("pelanggan")
    .findOne({ orderID: req.params.orderID });
  detailPelanggan
    .then((pelanggan) => {
      // Akses Midtrans Transaction Detail
      axios({
        method: "get",
        url: `https://api.sandbox.midtrans.com/v2/${req.params.orderID}/status`,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Basic " + Buffer.from(SERVER_ID).toString("base64"),
        },
      }).then((response) => {
        const {
          transaction_time,
          va_numbers,
          gross_amount,
          transaction_status,
        } = response.data;

        let orderID = `${req.params.orderID}`;
        let ch_pembayaran = va_numbers[0].bank.toUpperCase();
        let total_pembayaran = Math.trunc(gross_amount)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        let tanggal = `${transaction_time.slice(
          8,
          10
        )}/${transaction_time.slice(5, 7)}/${transaction_time.slice(0, 4)}`;
        let waktu = transaction_time.slice(10, -3);
        let status = transaction_status.toUpperCase();

        let namaPelanggan = pelanggan.namaPelanggan;
        let emailPelanggan = pelanggan.emailPelanggan;
        let perusahaan = pelanggan.perusahaanPelanggan;
        let alamat = pelanggan.alamatPelanggan;
        let telpon = pelanggan.kodepos;
        let orderDetails = pelanggan.orderDetails;

        data = {
          orderID,
          ch_pembayaran,
          total_pembayaran,
          tanggal,
          waktu,
          status,
          namaPelanggan,
          emailPelanggan,
          perusahaan,
          alamat,
          telpon,
          orderDetails,
        };
        res.render("transaksi-detail.ejs", {
          pageName: "transaksi",
          layout: "layouts/detail",
          datas: data,
        });
      });
    })
    .catch((err) => {
      return err;
    });
};
