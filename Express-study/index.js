'use strict';
const express = require('express');
const app = express();

const userList = [];
const user = {
  id: 0,
  twtId: '',
  name: ''
};

// 서버에서 body 데이터를 json으로 인식하겠다.
app.use(express.json());

// 단수 데이터 (id로 특정 데이터 명시가능)
// 복수 데이터
app.get(`/users`, function (req, res) {
  console.log(`request from ${req.ip} / addr: ${req.path}`);
  res.send(userList);
});

app.post(`/user`, function (req, res) {
  console.log(`request from ${req.ip} / addr: ${req.path}`);
  const user = {
    name: ''
  };

  const name = req.body.name;

  user.name = req.body.name;
  userList.push(user);

  console.log(userList);
  res.send(`success`);
});

app.listen(3000, '127.0.0.1', function () {
  console.log(`Sever listen at localhost:3000.`);
});
