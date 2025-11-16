function solution(arr, num) {
  let answer = 0;
  let idx = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length - i; j++) {
      idx += arr[j];

      if (idx > num) idx = 0;
      else if (idx === num) {
        answer++;
        idx = 0;
      }
      console.log(`arr[j] = ${arr[j]}`);
      console.log(`idx = ${idx}`);
    }
  }
  return answer;
}

let arr = [1, 2, 1, 3, 1, 1, 1, 2];
let num = 6;
console.log(solution(arr, num));
