'use strict';
const userDao = require('../DAO/user.dao');

exports.addUser = async function (id, twtId, name) {
  userDao.addUser(id, twtId, name);
  return;
};

exports.getUsers = async function () {
  return userDao.getUsers();
};

exports.getAUser = async function (id) {
  return userDao.getAUser(id);
};

exports.deleteUser = async function (id) {
  userDao.deleteUser(id);
  return;
};

exports.updateTwtId = async function (id, twtId) {
  userDao.updateTwtId(id, twtId);
  return;
};

exports.updateUserInfo = async function (id, twtId, name) {
  userDao.updateUserInfo(id, twtId, name);
  return;
};
