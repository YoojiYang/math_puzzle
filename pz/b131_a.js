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
console.log(fareTables);
const X = parseInt(lines[N + 1]);
console.log(lines.slice(N + 2));
const routes = lines.slice(N + 2).map(line => {
  const stringArray = line.split(' ');
  console.log(stringArray);
  const numberArray = stringArray.map(Number);
  console.log(numberArray);
  return numberArray;
});

console.log(routes);

let currentStation = 1;
let totalFare = 0;

console.log(routes[1]);
routes.forEach(([lineNumber, targetStation]) => {
  
  const fareTable = fareTables[lineNumber - 1];
  totalFare += Math.abs(fareTable[targetStation - 1] - fareTable[currentStation - 1]);
  currentStation = targetStation;
});


console.log(totalFare);