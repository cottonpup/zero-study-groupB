'use strict';

const service = require('../service/user.service');

exports.addUser = async function (req, res) {
  console.log(`request from ${req.ip} , ${req.method} ${req.path}`);
  const id = Number(req.body.id);
  const twtId = req.body.twtId;
  const name = req.body.name;

  await service.addUser(id, twtId, name);

  res.send('success');
  return;
};

exports.getUsers = async function (req, res) {
  console.log(`request from ${req.ip} , ${req.method} ${req.path}`);
  const data = await service.getUsers();

  res.send(data);
  return;
};

exports.getAUser = async function (req, res) {
  console.log(`request from ${req.ip} , ${req.method} ${req.path}`);
  const id = Number(req.params.id);
  const data = await service.getAUser(id);

  res.send(data);
  return;
};

exports.deleteUser = async function (req, res) {
  console.log(`request from ${req.ip} , ${req.method} ${req.path}`);
  const id = Number(req.params.id);
  await service.deleteUser(id);

  res.send('success');
  return;
};

exports.updateTwtId = async function (req, res) {
  console.log(`request from ${req.ip} , ${req.method} ${req.path}`);
  const id = Number(req.params.id);
  const twtId = req.body.twtId;
  await service.putUser(id, twtId);

  res.send('success');
  return;
};

exports.updateUserInfo = async function (req, res) {
  console.log(`request from ${req.ip} , ${req.method} ${req.path}`);
  const id = Number(req.params.id);
  const name = req.body.name;
  const twtId = req.body.twtId;
  await service.patchUser(id, twtId, name);

  res.send('success');
  return;
};
