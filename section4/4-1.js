function solution(arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (let i of arr) {
    /* let sum = 0,
      tmp = i;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    } */

    // 내장함수로 처리하는 방법
    let sum = i
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);
    console.log(sum);

    if (sum > max) {
      max = sum;
      answer = i;
    } else if (sum === max) {
      if (i > answer) answer = i;
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];

console.log(solution(arr));
