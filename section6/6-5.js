function solution(str) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ")" && str[i - 1] === "(") {
      // 레이저
      stack.pop();
      answer += stack.length;
    } else if (str[i] === ")" && str[i - 1] === ")") {
      // 막대의 끝
      stack.pop();
      answer += 1;
    } else stack.push(str[i]);
  }

  return answer;
}

console.log(solution("(((()(()()))(())()))(()())"));
// console.log(solution("(((()(()()))(())()))(()())"));
