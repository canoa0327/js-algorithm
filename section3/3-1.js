function solution(str) {
  str = str.toLowerCase();
  console.log(str);
  let len = str.length;

  let answer = "YES";

  /* for (let i = 0; i < Math.floor(len / 2); i++) {
    if (str[i] != str[len - i - 1]) {
      answer = "NO";
      break;
    }
  } */

  if (str !== str.split("").reverse().join("")) {
    return "NO";
  }

  return answer;
}

let str = "ttaata";

console.log(solution(str));
