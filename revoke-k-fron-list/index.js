/*
LINKED LISTS
Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in the list, since this is what you'll be asked to do during an interview.

Given a singly linked list of integers l and an integer k, remove all elements from list l that have a value equal to k.

Example

For l = [3, 1, 2, 3, 4, 5] and k = 3, the output should be
solution(l, k) = [1, 2, 4, 5];
For l = [1, 2, 3, 4, 5, 6, 7] and k = 10, the output should be
solution(l, k) = [1, 2, 3, 4, 5, 6, 7].
*/

// Singly-linked lists are already defined with this interface:
function ListNode(x) {
  this.value = x;
  this.next = null;
}


const l = [3, 1, 2, 3, 4, 5].reduceRight((acc, cur) => {
  const node = new ListNode(cur);
  node.next = acc;
  return node;
}, null);

// console.log(l);

function solution(l, k) {
  while (l && l.value === k){
      l = l.next;
  }
  
  let current = l;
  while (current && current.next){
      if(current.next.value === k) {
          current.next = current.next.next;
      } else {
          current = current.next
      }
  }
  return l
}
const k = 3;
console.log(solution(l, k)); // [1, 2, 4, 5]