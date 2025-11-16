function solution(m, product) {
  let answer = 0;

  // 2차원 배열 오름차순 정렬
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  // 총 학생 수 만큼 반복
  for (let i = 0; i < product.length; i++) {
    // 현재 i의 위치 배열에서 50% 할인 적용 후 남은 예산
    let money = m - product[i][0] / 2 + product[i][1];

    // i가 증가하면서 무조건 할인을 적용해보며 구매해보기 때문에 cnt = 1
    let cnt = 1;

    // 다시 학생 수 만큼 반복
    for (let j = 0; j < product.length; j++) {
      // j !== i (할인 적용으로 이미 구매한 상품) && 구매할 상품이 예산보다 클 경우 오버플로우 방지로 break
      if (j !== i && product[j][0] + product[j][1] > money) break;

      // j !== i (할인 적용으로 이미 구매한 상품) && 구매할 상품이 예산보다 작아 구매 가능한 경우
      if (j !== i && product[j][0] + product[j][1] <= money) {
        // 예산에서 해당 상품만큼 감액
        money -= product[j][0] + product[j][1];

        // 상품 구매처리
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }

  return answer;
}

let arr = [
  [8, 6],
  [2, 2],
  [12, 1],
  [4, 5],
  [4, 3],
];

console.log(solution(33, arr));
