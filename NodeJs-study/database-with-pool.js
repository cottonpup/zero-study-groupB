const mysql = require('mysql');
require('dotenv').config();

// 커넥션 객체를 여러개 생성하여 connection pooling 한다.
// 연못(pool)에 있는 물고기 여러마리(connections)중 필요할 때 마다 한 마리씩 낚아(한 개씩 호출해) 디비에 연결하도록 할 때 사용.
const connPool = mysql.createPool({
  // 민감성 정보는 env.로 하나씩 파일을 빼서 관리를 함
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
  multipleStatements: process.env.DB_MULTIPLE_STATEMENTS,
  waitForConnections: process.env.WAIT_FOR_CONNECTIONS,
  connectionLimit: process.env.DB_CONN_LIMIT
});

// 쿼리 선언
const query = `insert into zero_study_tb (twtId,name) values ("@test4","test4");`;

// 연결.
connPool.getConnection(function (err, conn) {
  if (err) {
    console.log(err);
    return;
  }
  // 정상적으로 연결됐을 경우 query 추출
  conn.query(query, function (err, results, fields) {
    if (err) {
      console.log(err);
      conn.release();
      return;
    }

    console.log(results);
    console.log(fields);
    // 다 사용했다면 연결을 풀어 다른 요청이 발생하면 재활용하도록 합니다!
    conn.release();
  });

  // TODO: 질문:: 여기서 conn.release(); 를 사용해도 되나요??

  // 여기서 질문! Pool에서도 커넥션을 끊어줘야할까요? NOPE 😡
  // pool을 끊지 말고 재활용 하자~! ♻️
  connPool.end(); // NOOOO // TODO: 여기서 컨넥션을 끊어도 되나욥?? 잘 작동은 된다..!
});
