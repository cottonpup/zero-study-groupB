// TEST CODE
/* 
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
  connectionLimit: process.env.DB_CONN_LIMIT // defaults to 10
});

const executeQuery = function (query, params) {
  return new Promise(function (resolve, reject) {
    // 연결.
    connPool.getConnection(function (err, conn) {
      if (err) {
        console.log(err);
        reject(err);
        return;
      }

      // 정상적으로 연결됐을 경우 query 추출
      // TODO: 질문:: fields가 sql의 body같은 건가요???
      conn.query(query, params, function (err, results, fields) {
        if (err) {
          console.log(err);
          conn.release();
          reject(err);
          return;
        }

        console.log(results);
        console.log(fields);
        conn.release();
        resolve(results);
      });
    });
  });
};

const main = async function () {
  // 쿼리 선언
  const query = `insert into zero_study_tb (twtId,name) values ("@test5","test5");`;
  const result = await executeQuery(query);
  console.log(`===== result in main =====`);
  console.log(result);
  // connPool.end(); // TODO: 여기서 컨넥션을 끊어도 되나욥?? 잘 작동은 된다..!
};

main();

module.exports = {
  executeQuery: executeQuery
};
 */
