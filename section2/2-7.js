function solution(arr) {
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let flag = true;
      for (let k = 0; k < 4; k++) {
        // 상하좌우 이동값
        // nx = 행, ny = 열
        let nx = i + dx[k];
        let ny = j + dy[k];

        // arr[i][j]가 음수이거나 arr 길이에 벗어나면 안됨
        if (
          nx >= 0 &&
          nx < arr.length &&
          ny >= 0 &&
          ny < arr.length &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = false;
          break;
        }
      }
      if (flag) answer++;
    }
  }

  return answer;
}

let arr = [
  [5, 3, 7, 2, 3], // arr[0]
  [3, 7, 1, 6, 1], // arr[1]
  [7, 2, 5, 3, 4], // arr[2]
  [4, 3, 6, 4, 1], // arr[3]
  [8, 7, 3, 5, 2], // arr[4]
];

console.log(solution(arr));
