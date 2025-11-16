/**
 * 시간복잡도 O(N)을 가질 수 있는 투포인터 알고리즘
 * */

// 시간복잡도 O(N^2)
// function solution(arr, num) {
//   let answer = 0;
//   let idx = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       idx += arr[j];

//       if (idx > num) idx = 0;
//       else if (idx === num) {
//         answer++;
//         idx = 0;
//       }
//       console.log(`arr[j] = ${arr[j]}`);
//       console.log(`idx = ${idx}`);
//     }
//   }
//   return answer;
// }

// let arr = [1, 2, 1, 3, 1, 1, 1, 2];
// let num = 6;
// console.log(solution(arr, num));

function solution(arr, num) {
  let answer = 0,
    start = 0,
    currentSum = 0;
  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end];
    if (currentSum === num) answer++;
    while (currentSum >= num) {
      currentSum -= arr[start++];
      if (currentSum === num) answer++;
    }
  }
  return answer;
}

let arr = [1, 2, 1, 3, 1, 1, 1, 2];
let num = 6;
console.log(solution(arr, num));
