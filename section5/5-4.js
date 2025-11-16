function solution(arr, num) {
  let answer = 0;
  let start = 0;
  let currentSum = 0;

  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end];
    while (currentSum > num) {
      currentSum -= arr[start++];
    }
    answer += end - start + 1;
    console.log(answer);
  }
  return answer;
}

let arr = [1, 3, 1, 2, 3];
let num = 5;
console.log(solution(arr, num));
