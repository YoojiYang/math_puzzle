const N = parseInt(lines[0][0]);
const M = parseInt(lines[0][2]);

const X = lines[N + 1];

const targetArray = lines.slice(N + 2, N + 2 + X );

let currentStation = 1;
let totalFare = 0;

for (let i = 0; i < targetArray.length; i++) {
  currentLine = parseInt(targetArray[i][0]);
  currentTargetStation = parseInt(targetArray[i][2]);
  
  currentLineFareList = lines[currentLine];
  currentLineFareList = currentLineFareList.split(' ');

  ride = currentLineFareList[currentStation - 1];
  getOff = currentLineFareList[currentTargetStation - 1];

  totalFare += Math.abs(getOff - ride);
  currentStation = currentTargetStation;
}



console.log(totalFare);