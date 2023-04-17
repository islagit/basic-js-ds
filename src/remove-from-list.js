const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {ListNode} l
 * @param {Number} k
 * @return {ListNode}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  if (!l) {
    return null;
  }

  // Handle the case where the head of the list has the value k.
  while (l && l.value === k) {
    l = l.next;
  }

  // Traverse the list and remove nodes with the value k.
  let curr = l;
  while (curr && curr.next) {
    if (curr.next.value === k) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return l;
}

module.exports = {
  removeKFromList
};
