/*

Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in l, since this is what you'll be asked to do during an interview.

Given a singly linked list of integers, determine whether or not it's a palindrome.

Note: in examples below and tests preview linked lists are presented as arrays just for simplicity of visualization: in real data you will be given a head node l of the linked list

Example

For l = [0, 1, 0], the output should be
solution(l) = true;

For l = [1, 2, 2, 3], the output should be
solution(l) = false.
*/

// Singly-linked lists are already defined with this interface:
function ListNode(x) {
  this.value = x;
  this.next = null;
}

const l = [0, 1, 0].reduceRight((acc, cur) => {
  const node = new ListNode(cur);
  node.next = acc;
  return node;
}
, null);

// console.log(l);

function solution(l) {
  const arr = [];
  while (l) {
    arr.push(l.value);
    l = l.next;
  }
  return arr.join('') === arr.reverse().join('');
}