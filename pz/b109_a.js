lines = [
  "9 4 5 2 3",
  "1 0",
  "1 2",
  "1 3",
  "1 4",
  "2 2",
  "2 3",
  "2 4",
  "3 3",
  "3 4",
];

// N = すでに予約されている座席の数
// H = 座席の縦の数
// W = 座席の横の数
// P = 最も見やすい席のp座標
// Q = 最も見やすい席のq座標
const [N, H, W, P, Q] = lines[0].split(' ').map(Number);
const allSeats = [];
for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    allSeats.push([i, j]);
  }
}

// 予約されている座席の座標を配列に格納
const reservedSeats = lines.slice(1, N + 1).map(line => line.split(' ').map(Number));

// 空席の座標を配列に格納
const nonReservedSeats = allSeats.filter(seat => !reservedSeats.some(reservedSeat => reservedSeat[0] === seat[0] && reservedSeat[1] === seat[1]));

// マンハッタン距離を求める関数
function getManhattanDistance([x, y]) {
  return Math.abs(P - x) + Math.abs(Q - y);
}

// 空席ごとのマンハッタン距離を計算
const seatsWithDistance = nonReservedSeats.map(seat => ({ seat, distance: getManhattanDistance(seat) }));
console.log(seatsWithDistance);

// マンハッタン距離の最小値を求める
const minManhattanDistance = Math.min(...seatsWithDistance.map(seat => seat.distance));

// マンハッタン距離が最小の座席をリストに格納
const minManhattanDistanceSeats = seatsWithDistance.filter(seat => seat.distance === minManhattanDistance);

for (let seat of minManhattanDistanceSeats) {
  // 配列をスペース区切りの文字列に変換
  console.log(seat.seat.join(' '));
}
