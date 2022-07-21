//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
    let string = ''
    str.split('').forEach((x,i) =>{
    string += x.repeat(2)
      })
      return string
     
    }