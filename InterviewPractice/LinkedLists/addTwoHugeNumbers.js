// Singly-linked lists are already defined with this interface:
function ListNode(x) {
  this.value = x;
  this.next = null;
}

function addTwoHugeNumbers(a, b) {
  var sum = null,
      tmp,
      carry = 0,
      x, y,
      a = revertList(a),
      b = revertList(b);
  
  while (a || b || carry) {
        x = a ? a.value : 0;
        y = b ? b.value : 0;
        
        tmp = new ListNode((carry + x + y) % 1e4);
        tmp.next = sum;
        sum = tmp;
        carry    = (carry + x + y) / 1e4 | 0;
        
        if (a) a = a.next;
        if (b) b = b.next;
    }
  console.log(sum)
  return sum;
}


function revertList(head) {
  let node = head,
      previous,
      tmp;

  while (node) {
    // save next before we overwrite node.next!
    tmp = node.next;

    // reverse pointer
    node.next = previous;

    // step forward in the list
    previous = node;
    node = tmp;
  }

  return previous;
}

let a = [9876, 5432, 1999]
let b = [1, 8001]
addTwoHugeNumbers(a, b) //= [9876, 5434, 0]