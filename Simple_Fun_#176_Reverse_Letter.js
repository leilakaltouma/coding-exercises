/*Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string*/

function reverseLetter(str) {
    let letters = str.split('').filter(a => /[a-zA-Z]/.test(a))
    return letters.reverse().join('')
 }