//question one

//from 2 wheels and 4 wheels chose all possible combnations to form the target value
//example [2,4,6]
//2 -> [2] count 1
//4 -> [2,2],[4] count 2
//6 -> [2,2,2], [2,4],[4,2]  count 2 because[2,4] and [4,2] are consider as same combnation

//helper function -> tabulation
const buildTab = (num) => {
  let tabulation = Array(num)
    .fill()
    .map((num) => []);
  tabulation[0].push([]);

  let choices = [2, 4]; //we only have 2 wheels and 4 wheels to chose form

  for (let i = 0; i < tabulation.length; i++) {
    if (tabulation[i]) {
      for (let choice of choices) {
        if (i + choice < tabulation.length) {
          tabulation[i].map((comb) => {
            tabulation[i + choice].push(
              [...comb, choice].sort((a, b) => a - b)
            ); //sort the arr for later use as a key
          });
        }
      }
    }
  }
  return tabulation;
  return tabulation;
};

const findAllCombinations = (arr) => {
  let max = Math.max(...arr);
  //build a table for the maxnum so we can re-use the same array for
  let tab = buildTab(max);
};
