function solution(str) {
  let answer = "YES";
  let stack = [];
  for (x of str) {
    if (x === "(") {
      stack.push(x);
    } else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  if (stack.length > 0) return "NO";
  return answer;
}

console.log(solution("())"));
