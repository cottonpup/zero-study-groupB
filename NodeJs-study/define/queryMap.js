'use strict';

const userMap = new Map();

userMap.set(
  'ADD_USER',
  'insert into zero_study_tb (twtId, name) values (?,?);'
);

userMap.set('GET_USERS', 'select * from zero_study_tb;');

userMap.set('GET_A_USER', 'select * from zero-study-tb where id = ?;');

userMap.set('DELETE_USER', 'delete from zero_study_tb where id = ?;');

userMap.set(
  'UPDATE_TWT_ID',
  'update zero_study_tb set twtId = ? where id = ?;'
);

userMap.set(
  'UPDATE_USER_INFO',
  'update zero_study_tb set twtId = ?, name = ? where id = ?;'
);

module.exports = {
  userMap: userMap
};
