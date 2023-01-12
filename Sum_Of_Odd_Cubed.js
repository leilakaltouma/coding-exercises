
//Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.


function cubeOdd(arr) {
    let answer= 0
    for(let i = 0; i < arr.length; i++){
      if(typeof arr[i] !== 'number')return undefined
      let cubed = (arr[i] ** 3) 
      if(cubed %2){ answer += cubed}
    }
      return answer
    }

