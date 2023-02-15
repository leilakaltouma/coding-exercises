Task:
/*You are given a word target and list of sorted(by length(increasing), number of upper case letters(decreasing), natural order) unique words words which always contains target, your task is to find the index(0 based) of target in words,which would always be in the list.

Examples:
words = ['JaCk', 'Jack', 'jack', 'jackk', 'COdewars', 'codeWars', 'abcdefgh', 'codewars']
'''
(list is sorted by length(small to big), then by number of uppercase letters(maximum to minimum) and then by natural order)
'''
target = 'codewars'
#result should be 7

#Another example:
words = ['cP', 'rE', 'sZ', 'am', 'bt', 'ev', 'hq', 'rx', 'yi', 'akC', 'nrcVpx', 'iKMVqsj']
target = 'akC'
#result should be 9
*/


const indexOf = (words, target) => {
    let min = 0, max = words.length - 1, curr;
    while (min < max) {
      curr = parseInt((min + max) / 2);
      if (words[curr].length < target.length) {
        min = curr + 1
      } else {
        max = curr - 1;
      }
    }
    return words.indexOf(target, min)
  }