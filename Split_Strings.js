/*Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/


function solution(str){
    let result = []
     for(let i = 0; i < str.length; i++){
       if (str[i+1]){
         result.push(str[i]+str[i+1])
         i++
       }
       else{result.push(str[i]+"_")}
     }
    return result