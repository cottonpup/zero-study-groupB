'use strict';
const express = require('express');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user.route');

const app = express();

// 서버에서 Body 데이터를 json으로 인식하겠다.
app.use(express.json());

app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(3000, '127.0.0.1', function () {
  console.log(`server listen at localhost:3000.`);
});
