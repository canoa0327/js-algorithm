function solution(n, m) {
  let answer = [];
  let temp = Array.from({ length: m }, () => 0);
  function DFS(level) {
    if (level === m) {
      answer.push(temp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        temp[level] = i;
        DFS(level + 1);
      }
    }
  }

  DFS(0);
  return answer;
}

console.log(solution(4, 3));
