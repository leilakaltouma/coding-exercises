/*
Complete the method which accepts an array of integers, and returns one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise

You can assume the array will always be valid, and there will always be one correct answer.
*/

function isSortedAndHow(array) {
  let ascending = array.slice().sort((a,b)=> a-b).join('')
  let descending = array.slice().sort((a,b) => b-a).join('')
  
  if(array.join('') == descending) {return "yes, descending"}
  else if(array.join('') == ascending) {return "yes, ascending"}
  else{return 'no'}
}
