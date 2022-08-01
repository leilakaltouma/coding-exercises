//As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

function gimme (triplet) {
    let arr = triplet.slice(0).sort((a, b) => a - b);
    return triplet.indexOf(arr[1]) 
    }