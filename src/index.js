module.exports = function reverse (n) {
  let arrayRevers = [];

  let intToReverse = Math.abs(n);
  let strToReverse = intToReverse.toString();
  arrayReverse = strToReverse.split('').reverse().join('');  
    
 return  arrayReverse;
}
