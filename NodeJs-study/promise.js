// setTimeout => 일정 시간이 지난 후에 함수를 실행
// setInterval => 일정 간격의 시간마다 함수를 실행

// 오늘은 로그를 순차적으로 찍게 해보며 동기,비동기 더 나아가 Promise를 다뤄보겠슴다

async function test() {
  await logger(1, 2000)
    .then(function (resolve) {
      console.log(resolve.msg);
    })
    .catch(function (err) {
      console.log(err);
    });
  await logger(2, 500)
    .then(function (resolve) {
      console.log(resolve);
    })
    .catch(function (err) {
      console.log(err);
    });
  await logger(3, 1000)
    .then(function (resolve) {
      console.log(resolve);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function logger(num, sec) {
  return new Promise(function (resolve, reject) {
    const isFlag = true;

    if (isFlag) {
      setTimeout(function () {
        console.log(num);
        resolve({ msg: '이 함수 최고' });
      }, sec);
    } else {
      reject('이 함수는 잘못 처리 됐습니다.');
    }
  });
}

test();
// 기대값
// 1
// 2
// 3
