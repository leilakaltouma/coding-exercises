/*Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)
*/


function reverse(array) {
    return array.reduce(function(a, b) {
      return [b].concat(a)
    }, []);
  }
