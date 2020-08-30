// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
  var curr;
  
  // remove leading k values with changing l
  while (l && l.value == k) {
      l = l.next;
  }

  // loop to the end.
  // skip nodes with k values.
  curr = l;
  while (curr && curr.next) {
      if (curr.next.value == k) {
          curr.next = curr.next.next;
      } else {
          curr = curr.next;
      }
  }
  return l;
}

function removeKFromListRecursion(l, k) {
  if(l===null) return null;
  else {
      l.next = removeKFromList(l.next,k);
      return (l.value===k)?l.next:l
  }
}

let l = [3, 1, 2, 3, 4, 5]
let k = 3
console.log(removeKFromList(l,k))
