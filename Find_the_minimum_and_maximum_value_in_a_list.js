//Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

var min = function(list){
    let minimum = Math.min(...list)
    return minimum
  }
  
  var max = function(list){
      let maximum = Math.max(...list)
      return maximum
  }