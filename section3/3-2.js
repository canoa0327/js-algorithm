function solution(str) {
  str = str.toLowerCase().replace(/[^a-z]/g, "");
  console.log(str);
  let len = str.length;

  let answer = "YES";

  if (str !== str.split("").reverse().join("")) {
    return "NO";
  }

  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";

console.log(solution(str))
