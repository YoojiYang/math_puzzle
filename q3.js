
totalCards = 10;
// cards = {};

// for(i = 1; i <= totalCards; i++) {
  //   cards.push(i: false)
  // }
  
  
const frontCard = []
const backCard = new Array(100).fill(false);

console.log(backCard)
console.log(backCard.length)

for (n = 2; n <= totalCards; n++) {
  for (i = n; i <= totalCards; i++){
    if (i % n === 0) {
      backCard[i] = !backCard[i];
    }
  }
}

console.log(backCard);
const arr = backCard.findIndex(value => value === false);
console.log(arr);


// for (n = 2; n <= 100; n++) {
//   console.log(`n = '${n}'`)

//   for (i = n; i <= 100; i++) {
//     // すでに表になっているカードは裏返す
//     if (i % n === 0 && frontCard.includes(i)) {
//       console.log(`${i}は取り除く`)
//       const index = frontCard.indexOf(i);
//       frontCard.splice(index, 1);
//       backCard.push(i)

//     //裏返しのカードを表に向ける 
//     }else if (i % n === 0) {
//       console.log(`${i}は追加する`)
//       frontCard.push(i)
//       const index = backCard.indexOf(i);
//       backCard.splice(index, 1);
//       console.log(backCard)
//     }
//   }
// }

// frontCard.sort((a, b) => a -b);
// // console.log(frontCard);
// backCard.sort((a, b) => a -b);
// console.log(backCard);

