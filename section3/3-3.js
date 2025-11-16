function solution(str) {
  str = str.toLowerCase().replace(/[a-z]/g, "");
  console.log(str);

  return parseInt(str);
}

let str = "g0en2T0s8eSoft";

console.log(solution(str));
