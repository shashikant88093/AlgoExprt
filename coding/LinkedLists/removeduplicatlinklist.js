class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// function removeDuplicateForLinkList(head){
//     let current = head

//     const seenValue = new Set();

//     if(current){
//         seenValue.add(current.value)
//     }

//     while(current && current.next){
//         if(seenValue.has(current.next.value)){
//             current.next = current.next.next
//         }else{
//             seenValue.add(current.next.value)
//             current = current.next
//         }
//     }

//     return head
// }

class LinkList {
  constructor() {
    this.head = null;
  }

  add(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  removeDuplicate() {
    let current = this.head;
    let seenValue = new Set();
    console.log(current, "current");
    if (current) {
      seenValue.add();
    }
    while (current && current.next) {
      if (seenValue.has(current.next.value)) {
        current.next = current.next.next;
      } else {
        seenValue.add(current.next.value);
        current = current.next;
      }
    }
  }

  print() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const newLinklist = new LinkList();
newLinklist.add(3);
newLinklist.add(5);
newLinklist.removeDuplicate();
newLinklist.print();
