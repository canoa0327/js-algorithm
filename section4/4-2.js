function solution(arr) {
  let answer = [];

  function isPrime(num) {
    // 1은 소수가 아니므로 제외
    if (num === 1) return false;

    // 2부터 num의 제곱근까지
    // 1씩 증가시켜 나눴을 때 나머지가 하나라도 0일 경우 소수가 아님
    for (let x = 2; x <= parseInt(Math.sqrt(num)); x++) {
      if (num % x === 0) return false;
    }
    return num;
  }

  for (let i of arr) {
    let reverse = parseInt(i.toString().split("").reverse().join(""));
    if (isPrime(reverse)) {
      answer.push(reverse);
    }
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];

console.log(solution(arr));
