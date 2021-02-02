'use strict';

const userModel = require('../model/user.model');

// OK
const getUsers = function () {
  return userModel.getUsers();
};

// OK
const addUser = function (name) {
  userModel.addUser(name);
};

// OK
const deleteUser = function (id) {
  userModel.deleteUser(id);
};

// OK
const updateUser = function (id, name) {
  userModel.updateUser(id, name);
};

const updateAllUser = function (id, name) {
  userModel.updateAllUser(id, name);
};

module.exports = {
  getUsers: getUsers,
  addUser: addUser,
  deleteUser: deleteUser,
  updateUser: updateUser,
  updateAllUser: updateAllUser
};
