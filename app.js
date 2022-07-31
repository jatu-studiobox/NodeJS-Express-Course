const express = require("express"); // import express เข้ามาใช้งาน
const chalk = require("chalk"); // import chalk เข้ามาใช้งาน
const debug = require("debug")("app"); // import debug เข้ามาใช้งาน
const morgan = require("morgan");   // import morgan เข้ามาใช้งาน
const path = require("path");   // เรียกใช้งาน 'path' เพื่อใช้ในการเข้าถึง folder static file

const mongoose = require('mongoose');

// เรียกใช้งาน productsRouter module (productsRouter.js)
const productsRouter = require("./src/router/productsRouter");
const airbnbRouter = require("./src/router/airbnbRouter");

const app = express();  // ประกาศ app ให้ใช้งาน express
const PORT = process.env.PORT || 4000;  // ค่า port ในการใช้งาน web app

app.use(morgan("combined"));    // เรียกใช้งาน morgan
// express.static เป็น middle ware ในการใช้งาน static file
app.use(express.static(path.join(__dirname, "/public/")));

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

        console.log("connected to database");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
connectDatabase();

// กำหนด 'views' folder ให้เป็นที่เก็บ views ของ app
app.set("views", "./src/views");
// เรียกใช้งาน view engine
app.set("view engine", "ejs");

// เรียกใช้งาน productRouter เมื่อมี context url '/products' เข้ามา
app.use("/products", productsRouter);
app.use("/airbnb", airbnbRouter);

app.get("/", (req, res) => {    // รับ request 'get' ที่ root uri
    // res.send("Hello, StudioBox");   // คำสั่งตอบกลับ

    // Render ไฟล์ ejs
    // เรียก render หน้า index.html และ ส่งค่า parameter 'username' เข้าไปในไฟล์ด้วย
    res.render("index", { username: "Jatu Tung", customers: ["Test1", "Test2", "Test3"] });
});

app.listen(PORT, () => {    // สั่งให้ app รอ request ที่ port ที่กำหนดไว้
    // console.log("Listening on port %d", port);
    // เรียกใช้งาน Chalk ในการแสดงผลใน terminal ให้เป็นสี
    // console.log("Listening on port : " + chalk.green(port));
    // ใช้ debug แทน console.log
    debug("Listening on port : " + chalk.red(PORT));
});