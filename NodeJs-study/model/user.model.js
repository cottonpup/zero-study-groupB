'use strict';

const userList = [];

let id = 0;

const addUser = function (name) {
  return new Promise(function (resolve, reject) {
    let currentUser;
    const user = {
      id: id++,
      name: name
    };

    if (user.name.trim()) {
      userList.push(user);
      currentUser = user;
      resolve(
        `새로운 유저가 입력되었습니다. 🎉 ${currentUser.id}: ${currentUser.name}`
      );
    } else {
      reject('유저의 이름을 다시 입력해주세요.');
    }
  });
};

const getUsers = function () {
  return userList;
};

const deleteUser = function (id) {
  return new Promise(function (resolve, reject) {
    const uniqueUser = userList.find((user) => user.id === id);
    if (id != undefined && id <= userList.length) {
      userList.splice(userList.indexOf(uniqueUser), 1);
      resolve('유저가 성공적으로 삭제되었습니다.');
    } else if (id >= userList.length) reject('유저의 아이디를 다시 입력해주세요.');
  });
};

const updateUser = function (id, name) {
  return new Promise(function (resolve, reject) {
    const uniqueUser = userList.find((user) => user.id === id);
    if (id != undefined && id <= userList.length) {
      uniqueUser.name = name;
      resolve('유저의 정보가 성공적으로 업데이트 되었습니다.');
    } else if (id >= userList.length) reject('유저의 이름을 다시 입력해주세요.');
  });
};

module.exports = {
  addUser: addUser,
  getUsers: getUsers,
  deleteUser: deleteUser,
  updateUser: updateUser
};
