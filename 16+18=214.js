/*For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:

https://knowyourmeme.com/memes/girl-at-whiteboard-adding
*/


function add(num1, num2) {
    let biggest = num1 >= num2 ? num1 : num2
    let smallest = num1 >= num2 ? num2 : num1
    smallest = ('0'.repeat(biggest.toString().length-smallest.toString().length) + smallest).split('')
    return biggest.toString().split('').map((x,i) => +x + +smallest[i]).join('')*1
  }