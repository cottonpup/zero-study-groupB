const userList = [];

exports.addUser = async function (id, twtId, name) {
  const user = { id: id, twtId: twtId, name: name };
  await userList.push(user);
};

exports.getUsers = async function () {
  return await userList;
};

exports.getAUser = async function (id) {
  const findUser = await userList.find((user) => user.id === id);
  return await findUser;
};

exports.deleteUser = async function (id) {
  const userIdx = userList.findIndex((user) => user.id === id);
  await userList.splice(userIdx, 1);
};

exports.updateTwtId = async function (id, twtId) {
  await userList.find((user) => {
    if (user.id === id) {
      console.log(`before : ${JSON.stringify(user)}`);
      user.twtId = twtId;
      console.log(`after : ${JSON.stringify(user)}`);
    }
  });
};

exports.updateUserInfo = async function (id, twtId, name) {
  await userList.find((user) => {
    if (user.id === id) {
      console.log(`before : ${JSON.stringify(user)}`);
      user.twtId = twtId;
      user.name = name;
      console.log(`after : ${JSON.stringify(user)}`);
    }
  });
};
