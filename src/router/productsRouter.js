const express = require("express");
const productsRouter = express.Router(); // สร้างตัวแปร productRouter เพื่อให้เป็น Router สำหรับ products
// ดึงข้อมูล products จาก json ไฟล์
const products = require("../data/products.json");

// สร้าง function การทำงาน สำหรับรองรับการทำงานของ route 'products'
productsRouter.route("/").get((req, res) => {
    // res.send("Hello, I am Products !!!");
    res.render("products", {
        products
    });
});

productsRouter.route("/:id").get((req, res) => {
    const id = req.params.id;
    // res.send("Hello, I am Products " + id + " !!!");
    res.render("product", { product: products[id] });
});

module.exports = productsRouter;