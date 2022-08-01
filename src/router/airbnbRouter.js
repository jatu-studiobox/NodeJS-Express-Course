const express = require("express");
const airbnbRouter = express.Router();

// เรียกใช้งาน Model Airbnb
const Airbnb = require('../models/Airbnb');

// สร้าง function การทำงาน สำหรับรองรับการทำงานของ route 'products'
airbnbRouter.route("/").get(async (req, res) => {
    Airbnb.find({}).then((rooms) => {
        res.render("airbnbs", {
            rooms
        });
    });
});

airbnbRouter.route("/:id").get((req, res) => {
    const id = req.params.id;

    Airbnb.findOne({ id: id }).then((room) => {
        console.log("room: ", room);
        // res.send("Hello, I am room " + id + " !!!");
        res.render("airbnb", {
            room : room
        });
    });
});

module.exports = airbnbRouter;