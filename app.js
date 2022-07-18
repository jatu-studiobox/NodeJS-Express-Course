const express = require("express"); // import express เข้ามาใช้งาน
const chalk = require("chalk"); // import chalk เข้ามาใช้งาน
const debug = require("debug")("app"); // import debug เข้ามาใช้งาน
const morgan = require("morgan");   // import morgan เข้ามาใช้งาน
const app = express();  // ประกาศ app ให้ใช้งาน express
const port = process.env.PORT || 3000;  // ค่า port ในการใช้งาน web app

app.use(morgan("combined"));    // เรียกใช้งาน morgan

app.get("/", (req, res) => {    // รับ request 'get' ที่ root uri
    res.send("Hello, StudioBox");   // คำสั่งตอบกลับ
});

app.listen(port, () => {    // สั่งให้ app รอ request ที่ port ที่กำหนดไว้
    // console.log("Listening on port %d", port);
    // เรียกใช้งาน Chalk ในการแสดงผลใน terminal ให้เป็นสี
    // console.log("Listening on port : " + chalk.green(port));
    // ใช้ debug แทน console.log
    debug("Listening on port : " + chalk.green(port));
});