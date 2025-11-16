function solution(arr, num) {
  let answer = 0;
  let start = 0;
  let sum = 0;

  /* for (let end = num - 1; end < arr.length; end++) {
    sum = arr[start] + arr[start + 1] + arr[end];
    // console.log(sum);
    if (sum > answer) answer = sum;
    start++;
  } */
  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }
  answer = sum;
  for (let i = num; i < arr.length; i++) {
    console.log(`sum = ${sum} arr[i] = ${arr[i]} arr[i-num] = ${arr[i - num]}`);
    sum += arr[i] - arr[i - num];

    answer = Math.max(answer, sum);
  }
  return answer;
}

let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
let num = 3;
console.log(solution(arr, num));
