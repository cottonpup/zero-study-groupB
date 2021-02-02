'use strict';

const userService = require('../service/user.service');

// OK
const getUsers = function (req, res) {
  res.send(userService.getUsers());
};

// OK
const addUser = function (req, res) {
  const name = req.body.name;
  userService.addUser(name);
  res.send(userService.getUsers());
};

// OK
const deleteUser = function (req, res) {
  userService.deleteUser(Number(req.params.id));
  res.send(userService.getUsers());
};

const updateUser = function (req, res) {
  userService.updateUser(Number(req.params.id), req.body.name);
  res.send(userService.getUsers());
};

const updateAllUser = function (req, res) {
  userService.updateUser(Number(req.params.id), req.body.name);
  res.send(userService.getUsers());
};

module.exports = {
  addUser: addUser,
  getUsers: getUsers,
  deleteUser: deleteUser,
  updateUser: updateUser,
  updateAllUser: updateAllUser
};
