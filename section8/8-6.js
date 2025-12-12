function solution(max, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let total = arr.reduce((a, b) => a + b, 0);
  let n = arr.length;

  function DFS(level, sum) {
    if (sum > max) return;
    if (level === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(level + 1, sum + arr[level]);
      DFS(level + 1, sum);
    }
  }

  DFS(0, 0);
  return answer;
}

console.log(solution(259, [81, 58, 42, 33, 61]));
