//Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

function roundToNext5(n){
    while(n % 5 !== 0){n++}
    return n
  }