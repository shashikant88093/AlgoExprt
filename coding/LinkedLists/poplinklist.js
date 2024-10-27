class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class PopLinklist {
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
    pop() {
        if (!this.head) {
            return undefined
        } else {
            let current = this.head;
            let newTail = current;
            while (current.next) {
                newTail = current;
                current = current.next
            }
            this.tail = newTail
            this.tail.next = null
            this.length--
            if(this.length === 0){
                this.head = null;
                this.tail = null;
            }
            return current
        }

    }
    print() {
        let current = this.head;

        while (current) {
            console.log(current, "val print");
            current = current.next;
        }
    }
}

let newPrint = new PopLinklist();
newPrint.push("hi");
newPrint.push("how");
newPrint.push("are");
newPrint.push("you");
newPrint.pop()
newPrint.print();
