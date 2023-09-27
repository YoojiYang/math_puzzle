const { is } = require("express/lib/request");

lines = [
  '3 3',
  '400 450 420',
  '500 400 410',
  '490 500 490',
]

// 初期値である参加者の数Nと跳躍回数Mを取得する
const [N, K] = lines[0].split(' ').map(Number);
// 各参加者の記録を参加者ごとに配列に格納する
const arr = lines.slice(1).map(line => line.split(' ').map(Number));
// 記録をが良い順にソートする
const sortedArr = arr.map(line => line.sort((a, b) => b - a));

let firstPlace = [0];
for (let i = 1; i < N; i++) {
  let isHeigher = false;
  let isSame = true;

  for (let j = 0; j < K; j++) {
    if (sortedArr[i][j] > sortedArr[firstPlace[0]][j]) {
      isHeigher = true;
      break;
    } else if (sortedArr[i][j] < sortedArr[firstPlace[0]][j]) {
      isSame = false;
      break;
    }
  }
  if (isHeigher) {
    firstPlace = [i];
  } else if (isSame) {
    firstPlace.push(i);
  }
}
firstPlace.forEach(player => console.log(player + 1));