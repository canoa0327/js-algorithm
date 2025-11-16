function solution(str) {
  let answer;
  let player = new Map();
  for (let x of str) {
    if (player.has(x)) {
      player.set(x, player.get(x) + 1);
    } else player.set(x, 1);
  }
  console.log(player);
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of player) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
