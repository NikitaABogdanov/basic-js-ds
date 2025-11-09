const { NotImplementedError } = require('../lib/errors');
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  getUnderlyingList() {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }

  enqueue(value) {
    if (!this.nums) {
      this.nums = [];
    }
    this.nums.push(value);
  }

  dequeue() {
    if (!this.nums) {
      return undefined;
    } else {
      return +this.nums.splice(0, 1);
    }
  }
}

module.exports = {
  Queue
};
