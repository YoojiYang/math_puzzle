lines = [
  '5',
  '5',
  '2',
  '1',
  '3',
  '4',
]

const N = Number(lines[0]);
let currentArray = lines.slice(1).map(Number);
let correctArray = [...currentArray].sort((a, b) => a - b).map(Number);
const maxCount = currentArray.length;

function getTotalRound() {
  
  let totalRound = 0

  for (let i = 0; i < maxCount; i++) {
  
    if (currentArray.toString() === correctArray.toString()) {
      return totalRound
    } else {
      filterValue = currentArray[0];
      correctArray = correctArray.filter(item => item !== filterValue);
      currentArray = currentArray.filter(item => item !== filterValue);
      totalRound += 1;
    }
    
  }
}

totalRound = getTotalRound();
console.log(totalRound);