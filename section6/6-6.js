function solution(p, num) {
  let queue = Array.from({ length: p }, (v, i) => i + 1);
  let answer = 0;

  while (queue.length) {
    for (let i = 1; i < num; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
}

console.log(solution(8, 3));
