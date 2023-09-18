// 仮の入力データ
const lines = [
  '5',
  '5',
  '2',
  '1',
  '3',
  '4',
];

const N = parseInt(lines[0], 10);
let carNumbers = lines.slice(1).map(num => parseInt(num, 10));
console.log(carNumbers);
let totalRounds = 0;
let lastRemovedIndex = -1;

while (carNumbers.length > 0) {
  const minCarNumber = Math.min(...carNumbers);
  const minCarNumberIndex = carNumbers.indexOf(minCarNumber);

  if (minCarNumberIndex < lastRemovedIndex) {
    totalRounds++;
  }

  carNumbers = carNumbers.filter(carNumber => carNumber !== minCarNumber);
  lastRemovedIndex = minCarNumberIndex;
}

console.log(totalRounds);
