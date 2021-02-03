'use strict';

const userModel = require('../model/user.model');

// OK
const getUsers = function () {
  console.log('👉 전체 유저 정보를 받아옵니다.');
  return userModel.getUsers();
};
// OK
const addUser = async function (name) {
  console.log('👉 새로운 유저를 추가합니다.');
  await userModel
    .addUser(name)
    .then((resolve) => console.log(resolve))
    .catch((err) => console.log(err));
};

// OK
const deleteUser = async function (id) {
  console.log('👉 특정 유저를 삭제합니다.');
  await userModel
    .deleteUser(id)
    .then((resolve) => console.log(resolve))
    .catch((err) => console.log(err));
};

// OK
const updateUser = async function (id, name) {
  console.log('👉 특정 유저 정보를 업데이트 합니다.');
  await userModel
    .updateUser(id, name)
    .then((resolve) => console.log(resolve))
    .catch((err) => console.log(err));
};

module.exports = {
  getUsers: getUsers,
  addUser: addUser,
  deleteUser: deleteUser,
  updateUser: updateUser
};
