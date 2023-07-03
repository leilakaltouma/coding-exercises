/*Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.

Examples
1      => null
25     => null
36     => 36
1244   => 12
952406 => 9
*/


const prevMultOfThree = n => {
    n = String(n)
    for(i = 0; ; i++){
      if(n.length === 0) return null
      if(n*1 % 3 === 0) return Number(n) 
      else{n = n.slice(0,-1)}
      console.log(n)
    }
    return null
  }