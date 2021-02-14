const userList = [];

exports.addUser = function (id, twtId, name) {
  const user = { id: id, twtId: twtId, name: name };
  userList.push(user);
};

exports.getUsers = function () {
  return userList;
};

exports.getAUser = function (id) {
  const findUser = userList.find((user) => user.id === id);
  return findUser;
};

exports.deleteUser = function (id) {
  const userIdx = userList.findIndex((user) => user.id === id);
  userList.splice(userIdx, 1);
};

exports.updateTwtId = function (id, twtId) {
  userList.find((user) => {
    if (user.id === id) {
      console.log(`before : ${JSON.stringify(user)}`);
      user.twtId = twtId;
      console.log(`after : ${JSON.stringify(user)}`);
    }
  });
};

exports.updateUserInfo = function (id, twtId, name) {
  userList.find((user) => {
    if (user.id === id) {
      console.log(`before : ${JSON.stringify(user)}`);
      user.twtId = twtId;
      user.name = name;
      console.log(`after : ${JSON.stringify(user)}`);
    }
  });
};
