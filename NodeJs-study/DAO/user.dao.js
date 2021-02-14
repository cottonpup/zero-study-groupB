const db = require('../database-with-promise');
const { userMap } = require('../define/queryMap');

exports.addUser = async function (twtId, name) {
  await db.executeQuery(userMap.get('USER_ADD'), [twtId, name]);

  return;
};

exports.getUsers = async function () {
  const userList = await db.executeQuery(`select * from zero_study_tb;`, []);
  return userList;
};

exports.getAUser = async function (id) {
  const user = await db.executeQuery(
    `select * from zero-study-tb where id = ?;, [id]`
  );
  return user;
};

exports.deleteUser = async function (id) {
  await db.executeQuery(`delete from zero_study_tb where id = ?;`, [id]);
  return;
};

exports.updateTwtId = async function (id, twtId) {
  await db.executeQuery(`update zero_study_tb set twtId = ? where id = ?;`, [
    twtId,
    id
  ]);

  return;
};

exports.updateUserInfo = async function (id, twtId, name) {
  await db.executeQuery(
    `update zero_study_tb set twtId = ?, name = ? where id = ?;`,
    [twtId, name]
  );

  return;
};
