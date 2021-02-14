const { executeQuery } = require('../utils/mysql.js');
const { userMap } = require('../define/queryMap');

exports.addUser = async function (twtId, name) {
  await executeQuery(userMap.get('USER_ADD'), [twtId, name]);

  return;
};

exports.getUsers = async function () {
  const userList = await executeQuery(`select * from zero_study_tb;`, []);
  return userList;
};

exports.getAUser = async function (id) {
  const user = await executeQuery(
    `select * from zero-study-tb where id = ?;, [id]`
  );
  return user;
};

exports.deleteUser = async function (id) {
  await executeQuery(`delete from zero_study_tb where id = ?;`, [id]);
  return;
};

exports.updateTwtId = async function (id, twtId) {
  await executeQuery(`update zero_study_tb set twtId = ? where id = ?;`, [
    twtId,
    id
  ]);

  return;
};

exports.updateUserInfo = async function (id, twtId, name) {
  await executeQuery(
    `update zero_study_tb set twtId = ?, name = ? where id = ?;`,
    [twtId, name]
  );

  return;
};
