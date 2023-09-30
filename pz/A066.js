lines = [
  '4',
  '1 2',
  '2 3',
  '5 7',
  '8 15',
]



function getAnswer(lines) {
  const shiftArray = lines.slice(1).map(line => line.split(' ').map(Number));

  const workSchedule = createWorkSchedule(shiftArray);

  return getworksCount(workSchedule);
}

// 勤務予定表をboolean型の配列で作成する。
function createWorkSchedule(shiftArray) {
  let maxDay = Math.max(...shiftArray.map(shift => shift[1]));
  let workSchedule = Array(maxDay).fill(false);
  
  for (let shift of shiftArray) {
    for (let i = shift[0] - 1; i < shift[1]; i++) {
      workSchedule[i] = true;
    }
  }
  return workSchedule;
}

// 連続で勤務する最大の日数を数える
function getworksCount(workSchedule) {
  let currentCount = 0;
  let maxCount = 0;

  for (let work of workSchedule) {
    if (work === false) {
      currentCount = 0;
      continue;
    } else {
      currentCount++;
      maxCount = Math.max(currentCount, maxCount);
    }
  }
  return maxCount;
}

const answer = getAnswer(lines);
console.log(answer);