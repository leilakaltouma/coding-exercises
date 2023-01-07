/*Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.
*/


function consonantCount(str) {
  str = str.toLowerCase()
  if(str.length == 0 || str == 'aeiou') return 0
  return str.split('').filter(x => 'bcdfghjklmnpqrstvwxyz'.includes(x)).length
}