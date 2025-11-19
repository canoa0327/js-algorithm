function solution(need, plan) {
  let answer = "YES";
  let queue = need.split("");

  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) answer = "NO";
    }
  }

  if (queue.length > 0) answer = "NO";

  return answer;
}

console.log(solution("CBA", "CBDGE"));
