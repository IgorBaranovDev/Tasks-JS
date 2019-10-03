/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;

  for (let n = 0; n < preferences.length; n++) {
    let first = preferences[n];
    if (first != -1 || first < preferences.length) {
      let second = preferences[first - 1];
      if (second != -1 || second < preferences.length) {
        let third = preferences[second - 1];
        if (third === n + 1 && (first != second && second != third && third != first)) {
          count++;
          for (let j = 0; j < preferences.length; j++) {
            if (preferences[j] === first || preferences[j] === second || preferences[j] === third) {
              preferences[j] = -1;
            }
          }
        }
      }
    }


  }
  return count;
};
