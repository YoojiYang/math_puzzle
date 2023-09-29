lines = [
'3 5',
'3 7 4 5 1',
'6 9 1 8 8',
'11 2 5 2 2',
]

const [H, W] = lines[0].split(' ').map(Number);
const chocoArrays = lines.slice(1).map(line => line.split(' ').map(Number));

function getHalfPoint(array) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / 2;
}

function createAnswerArray(i, W) {
  return ['A'.repeat(i + 1) + 'B'.repeat(W - i - 1)];
}


function processChocoArrays(chocoArrays, H, W) {
  let answerArrays = [];
  
  for (let j = 0; j < H; j++) {
    const halfPoint = getHalfPoint(chocoArrays[j]);
    let chocosPoint = 0;
    
    for (let i = 0; i < W; i++) {
      chocosPoint += chocoArrays[j][i];
      
      if (chocosPoint > halfPoint) {
        return false;
      }
      
      if (chocosPoint === halfPoint) {
        answerArrays.push(createAnswerArray(i, W));
        break;
      }
    }
  }
  return answerArrays;
}

const answerArrays = processChocoArrays(chocoArrays, H, W);

let A = answerArrays ? 'Yes' : 'No';
console.log(A);

if (A === 'Yes') {
  for (let arr of answerArrays) {
    console.log(arr[0]);
  }
}