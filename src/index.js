/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0; 
  preferences.unshift(0);
  let length=preferences.length;
  for (let n = 1; n<length; n++) { 
       let k = preferences[n];
       let m = preferences[k];
      if (n == preferences[m]) {
       count++;
     }
  }   
   return Math.floor (count/3);
};
