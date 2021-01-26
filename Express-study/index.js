'use strict';
const express = require('express');
const app = express();

let userList = [];
// const user = {
//   id: 0,
//   twtId: '',
//   name: ''
// };

// 서버에서 body 데이터를 json으로 인식하겠다.
// middleware
app.use(express.json());

// 단수 데이터 (id로 특정 데이터 명시가능)
// 복수 데이터
app.get(`/users`, function (req, res) {
  console.log(`request from ${req.ip} / addr: ${req.path}`);
  res.send(userList);
});

// endpoint = route
let num = 0;
app.post(`/user`, function (req, res) {
  console.log(`request from ${req.ip} / addr: ${req.path}`);
  const user = {
    id: num++,
    name: req.body.name,
    twtId: req.body.twtId
  };

  userList.push(user);

  console.log(userList);
  res.send(`success`);
});

app.put('/user/:id', function (req, res) {
  const uniqueUser = userList.find((user) => user.id === Number(req.params.id));

  uniqueUser.name = req.body.newName;
  uniqueUser.twtId = req.body.newTwtId;

  console.log(userList);
  res.send(`success`);
});

app.patch('/user', function (req, res) {
  console.log(`request from ${req.ip} / addr: ${req.path}`);
  userList.map((user) => {
    user.name = req.body.allName;
    user.twtId = req.body.allTwtId;
  });
  console.log(userList);
  res.send(`success`);
});

app.delete('/user/:id', function (req, res) {
  // const uniqueUser = userList.find((user) => user.id === Number(req.params.id));
  // userList.splice(userList.indexOf(uniqueUser), 1);
  // console.log(userList)

  const newUserList = userList.filter(
    (user) => user.id !== Number(req.params.id)
  );

  userList = newUserList.slice();
  console.log(userList);
  res.send(`success`);
});

app.listen(3000, '127.0.0.1', function () {
  console.log(`Sever listen at localhost:3000.`);
});
