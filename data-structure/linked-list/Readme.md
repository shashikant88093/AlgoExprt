# Linked list

# Linked List

A **Linked List** is a linear data structure where elements are stored in nodes, and each node points to the next node. Unlike arrays, linked lists do not require contiguous memory space. They consist of nodes where each node contains:

1. **Data**: The value stored in the node.
2. **Pointer/Reference**: A pointer to the next node in the sequence.

## Types of Linked Lists:
1. **Singly Linked List**:
   - Each node points to the next node.
   - The last node points to `null`, indicating the end of the list.
   - **Example**:
     ```
     Head -> 1 -> 2 -> 3 -> null
     ```

2. **Doubly Linked List**:
   - Each node contains two pointers: one pointing to the next node and another pointing to the previous node.
   - It allows traversal in both directions.
   - **Example**:
     ```
     null <- 1 <-> 2 <-> 3 -> null
     ```

3. **Circular Linked List**:
   - The last node points back to the first node instead of `null`.
   - Can be singly or doubly linked.
   - **Example**:
     ```
     Head -> 1 -> 2 -> 3 -> Head
     ```

## Basic Operations:
1. **Insertion**:
   - **At the beginning**: A new node is added before the head.
   - **At the end**: A new node is added after the last node.
   - **At a given position**: A new node is inserted at a specific index.

2. **Deletion**:
   - **From the beginning**: Remove the head node.
   - **From the end**: Remove the last node.
   - **From a given position**: Remove a node at a specific index.

3. **Traversal**:
   - Visiting each node in the list to access or modify data.

4. **Searching**:
   - Finding a node with a specific value.

## Time Complexity of Operations:

| **Operation**                | **Singly Linked List** | **Doubly Linked List** |
|------------------------------|-----------------------|-----------------------|
| **Insert at Head**           | `O(1)`                | `O(1)`                |
| **Insert at Tail**           | `O(n)`                | `O(1)` (with tail)    |
| **Insert at Position**       | `O(n)`                | `O(n)`                |
| **Delete at Head**           | `O(1)`                | `O(1)`                |
| **Delete at Tail**           | `O(n)`                | `O(1)` (with tail)    |
| **Delete at Position**       | `O(n)`                | `O(n)`                |
| **Traversal**                | `O(n)`                | `O(n)`                |
| **Search**                   | `O(n)`                | `O(n)`                |
| **Access by Index**          | `O(n)`                | `O(n)`                |

## JavaScript Example for Singly Linked List

<!-- ```javascript -->

```
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Add a node to the end of the list
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Add a node at the beginning
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // Delete a node by value
    delete(value) {
        if (!this.head) return null;
        
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
            this.size--;
        }
    }

    // Print the list
    print() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.value + ' -> ';
            current = current.next;
        }
        console.log(result + 'null');
    }
}

// Example usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.prepend(0);
list.print(); // Output: 0 -> 1 -> 2 -> null
list.delete(1);
list.print(); // Output: 0 -> 2 -> null
```