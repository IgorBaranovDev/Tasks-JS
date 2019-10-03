class Sorter {

  constructor() {
    this.storage = [];
    this.comparFunct = function(a, b) {
      return a - b
    };    
  }

  add(element) {
     this.storage.push(element);    
  }

  at(index) {
    return this.storage[index];
  }

  get length() {
    return this.storage.length;
  }

  toArray() {
    return this.storage;
  }

  sort(indices) {
   let resultArray = this.storage;
   let sortVar = [];
   indices.sort();
   indices.forEach(function (element) {
    sortVar.push(resultArray[element])
   });
   sortVar.sort(this.comparFunct);
   let counter = 0;
   indices.forEach(function (element) {
    resultArray[element] = sortVar[counter];
    counter++
   });  
  this.storage = resultArray;
  }

  setComparator(compareFunction) {
    this.comparFunct = compareFunction;
  }  
}

module.exports = Sorter;