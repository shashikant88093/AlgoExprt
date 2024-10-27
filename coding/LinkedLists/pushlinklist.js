class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class SinglyLinklist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        //  console.log("val",val)
        let newNode = new Node(val)
        if (!this.head) {
            // newNode.next = this.head
            this.head = newNode
            this.tail = this.head
        }else{
            // newNode.next = this.tail;
            this.tail.next = newNode;
            this.tail = newNode

        }




    }

    print() {

        let current = this.head
        while (current) {
            console.log(current.val, "current")
            current = current.next
        }

    }
}

// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("How")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

let list = new SinglyLinklist()

list.push("hi")
list.push("how")
list.push("are")
list.push("you")

list.print()



