'use strict';

const userList = [];

let id = 0;

const addUser = function (name) {
  const user = {
    id: id++,
    name: name
  };

  userList.push(user);
};

const getUsers = function () {
  return userList;
};

const deleteUser = function (id) {
  const uniqueUser = userList.find((user) => user.id === id);
  if (uniqueUser !== undefined)
    userList.splice(userList.indexOf(uniqueUser), 1);
};

const updateUser = function (id, name) {
  const uniqueUser = userList.find((user) => user.id === id);
  if (uniqueUser !== undefined) uniqueUser.name = name;
};

module.exports = {
  addUser: addUser,
  getUsers: getUsers,
  deleteUser: deleteUser,
  updateUser: updateUser
};
