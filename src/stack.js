const { NotImplementedError } = require('../lib/errors');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  push(value) {
    if (!this.nums) {
      this.nums = [];
    }
    this.nums.push(value);
  }

  pop() {
    if (!this.nums || this.nums.length === 0) {
      return undefined;
    } else {
      return +this.nums.splice(this.nums.length - 1, 1);
    }
  }

  peek() {
    if (!this.nums || this.nums.length === 0) {
      return undefined;
    } else {
      return this.nums[this.nums.length - 1];
    }
  }
}

module.exports = {
  Stack,
};
