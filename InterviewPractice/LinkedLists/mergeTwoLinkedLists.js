// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//

function mergeTwoLinkedLists(l1, l2) {

  const mergedList = [];

  const createNode = (l1Node, l2Node) => {
    if (l1Node) {
      if (!l2Node || l1Node.value <= l2Node.value) {
       
        mergedList.push(l1Node.value);
        return createNode(l1Node.next, l2Node);
      }
    }
    if (l2Node) {
      if (!l1Node || l2Node.value < l1Node.value) {
        
        mergedList.push(l2Node.value);
        return createNode(l1Node, l2Node.next);
      }
    }
  }

  createNode(l1, l2);

  return mergedList;

}

const createList = (arr) => {

  function ListNode(x) {
    this.value = x;
    this.next = null;
  }

  var list = new ListNode(arr.shift());

  placeNode = (newNode, destinationNode) => {
    if (destinationNode.next === null) {
      destinationNode.next = newNode;
    } else {
      placeNode(newNode, destinationNode.next);
    }
  }

  createNode = () => {
    if (arr.length) {
      node = new ListNode(arr.shift());
      placeNode(node, list);
      createNode();
    }
    return;
  }

  createNode();

  return list;

}

let l1;
let l2;

l1 = [1, 2, 3]
l2 = [4, 5, 6]

console.log(mergeTwoLinkedLists(createList(l1), createList(l2)))