function solution(num) {
  let answer = [];
  let ch = Array.from({ length: num + 1 }, () => 0);

  function DFS(v) {
    if (v === num + 1) {
      let temp = "";
      for (let i = 1; i <= num; i++) {
        if (ch[i] === 1) temp += i + " ";
      }
      if (temp.length > 0) answer.push(temp.trim());
    } else {
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  }

  DFS(1);
  return answer;
}

console.log(solution(3));
