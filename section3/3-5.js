function solution(s) {
  let answer = "";
  let count = 1;

  for (let i = 0; i < s.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      if (count === 1) count = "";
      answer += `${str[i]}` + `${count}`;
      count = 1;
    }
  }

  return answer;
}

let str = "KKHSSSSSSSE";

console.log(solution(str));
