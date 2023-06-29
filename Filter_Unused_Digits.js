/*Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
Note: the digits in the resulting string should be sorted.
*/


function unusedDigits() {
    let nums = '0123456789'
    let unusedvalues = ''
    let args = [...arguments].join('')
    for(let i = 0; i< nums.length; i++){
      if(! args.includes(nums[i])) unusedvalues += nums[i]
    }
    return unusedvalues
  }
  
