function solution(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;

  // 오름차순 정렬
  // arr1.sort() 처럼 콜백 입력 안할 시 사전순으로 정렬됨
  // 예) [1, 3, 10, 5, 2] -> [1, 10, 2, 3, 5]
  console.log(arr1.sort());
  console.log(arr2.sort());
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  while (p1 < n && p2 < m) {
    if (arr1[p1] < arr2[p2]) p1++;
    else if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
      p2++;
    } else p2++;
  }

  return answer;
}
let arr1 = [1, 3, 10, 5, 2];
let arr2 = [3, 2, 5, 7, 8];

console.log(solution(arr1, arr2));
