'use strict';
const express = require('express');
const app = express();

const userRouter = require('./route/user.route');

app.use(express.json());
app.use('/user', userRouter);

app.listen(3000, '127.0.0.1', function () {
  console.log(`Sever listen at localhost:3000.`);
});

// 1. write code what we learned again
// 2. study promise await (just study what it is)

// index -> routes -> controllers -> services <-> services