function solution(str) {
  let answer = 0;
  let stack = [];
  for (x of str) {
    if (isNaN(x)) {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    } else stack.push(Number(x));
  }
  answer = stack.join("");
  return answer;
}

console.log(solution("35-"));
