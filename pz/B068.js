const { get } = require("express/lib/response");

lines = [
'3 5',
'3 7 4 5 1',
'6 9 1 8 8',
'11 2 5 2 2',
]

const [H, W] = lines[0].split(' ').map(Number);

const chocoArrays = lines.slice(1).map(line => line.split(' ').map(Number));

function getHalfPoint(array) {
  const totalPoint = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return totalPoint / 2;
}

function createAnswerArray(i, W) {
  return ['A'.repeat(i + 1) + 'B'.repeat(W - i - 1)];
}

let answerArrays = [];

function getAnswer(chocoArrays, H, W) {
  
  for (let j = 0; j < H; j++) {
    const halfPoint = getHalfPoint(chocoArrays[j]);
    let chocosPoint = 0;
    
    for (let i = 0; i < W; i++) {
      let answerArray = [];
      chocosPoint += chocoArrays[j][i];
      
      if (chocosPoint > halfPoint) {
        return false;
      }
      
      if (chocosPoint === halfPoint) {
        answerArray = createAnswerArray(i, W);
        answerArrays.push(answerArray);
        break;
      }
      
      if (chocosPoint < halfPoint) {
        continue;
      }
    }
  }
}

let A = '';
const answer = getAnswer(chocoArrays, H, W);
if (answer === false) {
  A = 'No';
} else {
  A = 'Yes';
}
console.log(A);

if (A === 'Yes') {
  for (let arr of answerArrays) {
    console.log(arr[0]);
  }
}