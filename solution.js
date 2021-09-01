//question one

//from 2 wheels and 4 wheels chose all possible combnations to form the target value
//example [2,4,6]
//2 -> [2] count 1
//4 -> [2,2],[4] count 2
//6 -> [2,2,2], [2,4],[4,2]  count 2 because[2,4] and [4,2] are consider as same combnation

//helper function one -> tabulation
const buildTab = (num) => {
  let tabulation = Array(num+1)
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
};
//for [ 2,4,6] -> 
  //  [
  //   [[]],                       index 0 has 0 way
  //   [],                         index 1 has 0 way     
  //   [[2]],                      index 2 has 1 way   
  //   [],
  //   [[4],[2,2]],                index 4 has 2 way
  //   [],
  //   [[2,2,2],[2,4],[2,4]]       index 6 has 3 way
  // ]


//healper function to count the ways to sum up to target
const combsCount = (arr) =>{
  const counts = [0];
  for(let i=1;i<arr.length;i++){
    if(arr[i].length != 0) {
      let count = 0;
      let map = {};
      for(let comb of arr[i]){
        let temp = comb.join('')
        if(!map[temp]){
          count++;
          map[temp] = true
        }
      }
      counts.push(count)
    }else
      counts.push(0)
  }
  return counts
}



const findAllCombinations = (arr) => {
  let max = Math.max(...arr);
  //build a table for the maxnum so we can re-use the same array for
  let tab = buildTab(max);
  let counts = combsCount(tab)

  let result = []

  for(let i = 0; i < arr.length; i++){
    result.push(counts[arr[i]])
  }

  return result
};



//approach explain

// 1 --- use DP tabulation to build the arr, each index corresponding the value, -> idex 5 -> number 5 
// contains either [] to reprenst there is no way to form that value
// or 2-d arr, each subarr inside reprenst unique way to form that value 
// exampl, at index 2 -> [[2]] meaning there is one way to form 2

// 2 --- because only the unique ways are counted, like [2,4] and [4,2] count as 1 and
// we need to filter the duplicate combnation,thats the second helper function
// by sorting the combnation, we make sure all duplicate combs has the same order,
// then we can use the joined string as key for our map, loop through all the subarr 
// and only count the ones havn't been seen in the map.


// 3-- now we have a counts arr, it index corresponding to the number, and it's value corresponding to the index
// unique ways of combnation to form that number, we can simply loop through the input arr and neither 
// replace it's value in place to reprenst the count or create a new result arr to maintain the original input.

