/*My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.*/

function predictAge(...ages){
  
  return Math.floor(Math.sqrt(ages.map(x=>x*x).reduce((a,b) => a+b,0))/2)

}
