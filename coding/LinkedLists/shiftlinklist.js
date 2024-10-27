class Node {
  constructor(val) {
    this.head = val;
    this.next = null;
  }
}

class shiftLinklist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  push(val) {
    let newVal = new Node(val);
    if (!this.head) {
      this.head = newVal;
      this.tail = this.head;
    } else {
      this.tail.next = newVal;
      this.tail = newVal;
    }
  }
  pop(){
    if(!this.head) return undefined 
    let current = this.head
    let newTail = current

    while(current.next){
        newTail = current
        current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.count --
    if(this.count === 0){
        this.head = null
        this.tail = null
    }
    return current

  }

shift(){
    if(!this.head) return undefined 
    let current = this.head
    // console.log(current,"current shift")
    this.head = current.next
    // console.log(this.head,"this.head shift")
    this.count--
    return current

}

  print() {
    let current = this.head;
    while (current) {
        this.count++
      console.log(current, "current");
      current = current.next;
    }
    // console.log(this.count,"count")
  }
}

let newShift = new shiftLinklist();

newShift.push(12);
newShift.push(24);
newShift.push(36);
newShift.push(56);
// newShift.pop();
newShift.print();
newShift.shift()
newShift.print();
