# solution_question_one

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
