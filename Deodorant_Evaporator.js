/*This program tests the life of an evaporator containing a gas.

We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

The program reports the nth day (as an integer) on which the evaporator will be out of use.*/

function evaporator(content, evap_per_day, threshold){ 
    let total = content
    let days = 0
    while(total >= content*threshold/100) {
      total -= (evap_per_day/100)*total
      days ++
    }
    return days
  }
  

