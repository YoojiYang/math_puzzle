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
let totalRounds = 0;
let lastRemovedIndex = -1;

while (carNumbers.length > 0) {
  console.log('-------------- start -------------------')
  console.log('totalRound: ', totalRounds);
  console.log(carNumbers);
  const minCarNumber = Math.min(...carNumbers);
  console.log('minNum: ', minCarNumber);
  
  const minCarNumberIndex = carNumbers.indexOf(minCarNumber);
  console.log('minCarIndex: ', minCarNumberIndex);
  
  if (minCarNumberIndex < lastRemovedIndex) {
    console.log('totalRounds ++');
    totalRounds++;
    console.log('totalRound: ', totalRounds);
  }

  carNumbers = carNumbers.filter(carNumber => carNumber !== minCarNumber);
  console.log('good by');
  console.log('carNumbers: ', carNumbers);
  lastRemovedIndex = minCarNumberIndex;
  console.log('lastRemovedIndex: ', lastRemovedIndex);
  console.log('--------------end-------------------')
}

console.log(totalRounds);
