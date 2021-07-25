"use strict";

// 모듈
const express = require("express");
const app = express();


// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

// 라우팅
const home = require("./routes/home");

// use -> 미들 웨어를 등록해주는 메서드.
app.use("/", home);

module.exports = app;