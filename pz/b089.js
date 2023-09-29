lines = [
  '6 2',
  'HPPLLM',
  'UROQUV',
  'FBSRZY',
  'DPEFKT',
  'GBBEUY',
  'EMCQFY',
  'BEEF',
  'PORK',
]

// 初期値を求める、正方形の一片の長さ、与えられる単語の数、与えられた単語
const [N, M] = lines[0].split(' ').map(Number);
const stringArray = lines.slice(1, N + 1);
const words = lines.slice(N + 1);

function checkAllWords(stringArray, word, i, j) {
  for (let k = 1; k < word.length; k ++) {
    if (word[k] !== stringArray[i + k][j + k]) {
      return false;
    }
  }
  return true;
}

// 与えられた単語を文字列の中から探す
function getWordAddress(N, stringArray, word, answerArray) {
  // 行ごとの検索
  for (let i = 0; i <= N - word.length; i++) {
    // 列ごとに検索
    for (let j = 0; j <= N - word.length; j++) {
      if (word[0] === stringArray[i][j]) {
        if (checkAllWords(stringArray, word, i, j)) {
          answerArray.push([j+ 1, i + 1]);
        }
      }
    }
  }
}


function getAnswerArray(N, stringArray, words) {
  let answerArray = [];

  for (let word of words) {
    getWordAddress(N, stringArray, word, answerArray);
  }
  return answerArray;
}

answerArrays = getAnswerArray(N, stringArray, words);

for (let arr of answerArrays) {
  console.log(arr[0], arr[1]);
}