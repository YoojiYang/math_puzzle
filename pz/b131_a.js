lines = [
  "2 3",
  "0 10 20",
  "0 5 15",
  "3",
  "1 2",
  "2 3",
  "1 3"
];

  
const [N, M] = lines[0].split(' ').map(Number);
const fareTables = lines.slice(1, N + 1).map(line => line.split(' ').map(Number));
const X = parseInt(lines[N + 1]);
const routes = lines.slice(N + 2).map(line => line.split(' ').map(Number));
console.log('routes: ' + routes);

let currentStation = 1;
let totalFare = 0;


routes.forEach(([lineNumber, targetStation]) => {
  console.log(`lineNumber: ${lineNumber}`);
  console.log(`targetStation: ${targetStation}`);
  
  
  const fareTable = fareTables[lineNumber - 1];
  console.log('fareTables: ' + fareTables);
  console.log('fareTable: ' + fareTable);
  totalFare += Math.abs(fareTable[targetStation - 1] - fareTable[currentStation - 1]);
  currentStation = targetStation;
});


console.log(totalFare);