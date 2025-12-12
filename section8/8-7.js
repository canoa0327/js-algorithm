function solution(m, s, t) {
  let answer = Number.MIN_SAFE_INTEGER;
  function DFS(level, sum, time) {
    if (time > m) return;
    if (level === s.length) {
      answer = Math.max(answer, sum);
    } else {
      DFS(level + 1, s[level] + sum, t[level] + time);
      DFS(level + 1, sum, time);
    }
  }

  DFS(0, 0, 0);
  return answer;
}

let s = [10, 25, 15, 6, 7];
let t = [5, 12, 8, 3, 4];
console.log(solution(20, s, t));
