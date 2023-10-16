lines = [
  '5 8',
  '.#.#....',
  '........',
  '........',
  '........',
  '.....#..',
]

function getTotalCount(lines) {
  const [ H, W ] = lines[0].split(' ').map(Number);
  const field = lines.slice(1).map(line => line.split(''));
  
  let colIndex = [];
  let rowIndex = [];

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (field[i][j] === '#') {
        rowIndex.push(i + 1);
        colIndex.push(j + 1);
      }
    }
  }

  colIndex = Array.from(new Set(colIndex));
  // console.log('colIndex: ', colIndex);
  rowIndex = Array.from(new Set(rowIndex));
  // console.log('rowIndex: ', rowIndex);

  const colCount = (H - rowIndex.length) * colIndex.length;
  // console.log(colCount);

  const rowCount = W * rowIndex.length;
  // console.log(rowCount);

  return colCount + rowCount;
} 

const totalCount = getTotalCount(lines);

console.log(totalCount);
