const { NotImplementedError } = require('../lib/errors');
// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  root() {
    return this.data[0];
  }

  add(data) {
    if (!this.data) {
      this.data = [];
    }
    this.data.push(data);
  }

  find(data) {
    if (!this.data.includes(data)) {
      return null
    } else {
      return data;
    }
  }

  has(data) {
    return this.data.includes(data);
  }

  remove(data) {
    let indexOfData = this.data.indexOf(data);
    this.data.splice(indexOfData, 1);
  }

  min() {
    let min = this.data[0];
    for (let char of this.data) {
      min = min < char ? min : char;
    }
    return min;
  }

  max() {
    let max = 0;
    for (let char of this.data) {
      max = max > char ? max : char;
    }
    return max;
  }
}

module.exports = {
  BinarySearchTree
};