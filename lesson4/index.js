const callApi1 = new Promise((resolve, reject) => {
  resolve('callApi1 success!');
});

const callApi2 = new Promise((resolve, reject) => {
  reject('callApi2 failed!');
});

const callApi3 = new Promise((resolve, reject) => {
  resolve('callApi3 success!');
});

callApi1
  .then((result) => {
    console.log('============result 1================');
    console.log(result);
    console.log('============================');
    return callApi2;
  })
  .then((result) => {
    console.log('============result 2================');
    console.log(result);
    console.log('============================');
    return callApi3;
  })
  .then((result) => {
    console.log('============result================');
    console.log(result);
    console.log('============================');
    return callApi3;
  })
  .catch((error) => {
    console.log('============error================');
    console.log(error);
    console.log('============================');
  });

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Promise.all, Promise.allSettled, Promise.any, Promise.race

// Promise.all
// + Trả về kết quả sau khi tất cả promise có được kết quả (nhận đc resolve)
// + Tất cả promise phải không có reject thì mới nhận được kết quả

//Promise.any

// + promise nào xong trước thì trả về kết quả
// + chỉ cần 1 promise có resolve là được
// + trả về lỗi khi tất cả promise trả về reject

// Promise.race
// + Chỉ chạy promise đầu tiên

//Promise.allSettled
// + Nó không catch lỗi
// + Trả kết quả về sau khi thực thi tất cả promise : kết quả là 1 array: { status, reason }, status == "fulfilled": thành công, status == 'rejected' thất bại
const api1 = new Promise((resolve, reject) => delay(3000).then(() => resolve('Called API 1')));
const api2 = new Promise((resolve, reject) => delay(5000).then(() => resolve('Called API 2')));
const api3 = new Promise((resolve, reject) => delay(4000).then(() => resolve('Called API 3')));

const result = Promise.all([api1, api2, api3]);

result
  .then((res) => {
    console.log('==============res==============');
    console.log(res);
    console.log('============================');
  })
  .catch((error) => {
    console.log('============error================');
    console.log(error);
    console.log('============================');
  });

//Aysnc / await

async function callAPI() {
  try {
    const result1 = await api1;
    const result2 = await api2;
    const result3 = await api3;
    console.log('===============result=============');
    console.log(result1, result2, result3);
    console.log('============================');
  } catch (error) {
    console.log('===========error=================');
    console.log(error);
    console.log('============================');
  }
}

// callAPI();

//aysnc / await in loop;

// hoạt động với for, ko hoạt động với forEach

async function callApiWithId(id) {
  return delay(3000).then(() => id);
}

const arr = [1, 2, 3, 4, 5];

async function getItem() {
  for (let i = 0; i < arr.length; i++) {
    const result = await callApiWithId(arr[i]);
    console.log('============result================');
    console.log(result);
    console.log('============================');
  }
  console.log('=============End===============');
  console.log();
  console.log('============================');
}

// getItem();

arr.forEach(async (id) => {
  const result = await callApiWithId(id);
  console.log('=============result===============');
  console.log(result);
  console.log('============================');
})
