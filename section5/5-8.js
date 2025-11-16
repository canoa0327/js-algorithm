function solution(s, t) {
  let answer = 0;
  let sH = new Map();
  for (let x of t) {
    sH.set(x, (sH.get(x) || 0) - 1);
  }
  console.log(sH);
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    sH.set(s[i], (sH.get(s[i]) || 0) + 1);
    if (sH.get(s[i]) === 0) sH.delete(s[i]);
  }
  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    sH.set(s[rt], (sH.get(s[rt]) || 0) + 1);
    if (sH.get(s[rt]) === 0) sH.delete(s[rt]);
    if (sH.size === 0) answer++;
    sH.set(s[lt], (sH.get(s[lt]) || 0) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}
console.log(solution("bacacbcba", "abc"));
