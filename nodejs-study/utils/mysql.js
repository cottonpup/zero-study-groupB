const mysql = require('mysql');
require('dotenv').config();

// 커넥션 객체를 여러개 생성하여 connection pooling 한다.
// 연못(pool)에 있는 물고기 여러마리(connections)중 필요할 때 마다 한 마리씩 낚아(한 개씩 호출해) 디비에 연결하도록 할 때 사용.
const connPool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
  multipleStatements: process.env.DB_MULTIPLE_STATEMENTS,
  waitForConnections: process.env.WAIT_FOR_CONNECTIONS,
  connectionLimit: process.env.DB_CONN_LIMIT
});

// TODO: async await 추가
const executeQuery = function (query, params) {
  return new Promise(function (resolve, reject) {
    // 연결.
    connPool.getConnection(function (err, conn) {
      if (err) {
        console.log(err);
        conn.release();
        reject(err);
      } else {
        // 정상적으로 연결됐을 경우 query 추출
        // TODO: fields??
        conn.query(query, params, function (err, results, fields) {
          if (err) {
            console.log(err);
            conn.release();
            reject(err);
          } else {
            console.log(results);
            console.log(fields);
            conn.release();
            resolve(results);
          }
        });
      }
    });
  });
};

module.exports = {
  executeQuery: executeQuery
};
