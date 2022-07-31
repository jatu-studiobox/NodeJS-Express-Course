const express = require("express");
const airbnbRouter = express.Router();
// ดึงข้อมูล products จาก json ไฟล์

const Airbnb = require('../models/Airbnb');

// สร้าง function การทำงาน สำหรับรองรับการทำงานของ route 'products'
airbnbRouter.route("/").get(async (req, res) => {
    // const airbnb = await Airbnb.findOne({ name: 'BRIGHTON' }).exec();
    // const airbnb = await Airbnb.find().limit(15);
    Airbnb.find({}).sort({_id: -1}).limit(1).then((bnb) => {
        const bnbItem = bnb[0];
        // res.send("Hello, I am Products !!!");      
        res.render("airbnb", { bnbItem: bnbItem });
    });
});

airbnbRouter.route("/:id").get((req, res) => {
    const id = req.params.id;
    // res.send("Hello, I am Products " + id + " !!!");
    res.render("product", { product: products[id] });
});

module.exports = airbnbRouter;