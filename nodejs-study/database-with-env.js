const mysql = require('mysql');
const result = require('dotenv').config(); // dotenv가 .env 파일을 읽게끔한다.

console.log(`===== PARSED ENVS =====`);
console.log(result.parsed);

// 커넥션 객체 한 개 생성
const mysqlConn = mysql.createConnection({
  // 환경변수에 접근가능
  host: process.env.DB_HOST, // host 정보는 들어가면 좋지 않음.
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
  multipleStatements: process.env.DB_MULTIPLE_STATE_MENTS,
  waitForConnections: process.env.WAIT_FOR_CONNECTIONS
});

// 쿼리 선언
const query = `insert into zero_study_tb (twtId,name) values ("@test2","test2");`;

// 연결.
mysqlConn.connect();

// 커넥션 객체에서 쿼리 실행
mysqlConn.query(query, function (err, results, fields) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('===== RESULT =====');
  console.log(results);
  console.log('===== FIELDS =====');
  console.log(fields);
});

// TODO: 다른 파일에선 컨넥션을 재사용하기 위해 end하지 않고 release해주었는데 왜 여기선 end 해준건가요?
// 연결 종료.
mysqlConn.end();
