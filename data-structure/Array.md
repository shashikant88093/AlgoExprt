# Key Terms

> Array 

  A linear collection of data values that are accessible at numbered indices, starting at index 0.

  The following are an array's standard operations and thier corresponding time complexities

  - ***Accessing a value at a given index***:O(1)
  - ***Updating a value at a given index***:O(1)
  - ***Inserting a value at the beginning***:O(n)
  - ***Inserting a value in the middle***:O(n)
  - ***Inserting a value in the end***:
        - amortized O(1) when dealing with a ***dynamic array***
        - O(n) when dealing with a ***static array***

  - ***Removing a value at the beginning***:O(n)
  - ***Removing a value in the middle***:O(n)
  - ***Removing a value in the end***:O(1)
  - ***Coping the array:*** O(n)

# Key Terms

## Array

An **array** is a linear collection of data values that are accessible at numbered indices, starting at index 0.

### Standard Operations and Time Complexities

- **Accessing a value at a given index**: O(1)
- **Updating a value at a given index**: O(1)
- **Inserting a value**:
  - At the beginning: O(n)
  - In the middle: O(n)
  - At the end: 
    - Amortized O(1) for **dynamic arrays**
    - O(n) for **static arrays**
  
- **Removing a value**:
  - At the beginning: O(n)
  - In the middle: O(n)
  - At the end: O(1)

- **Copying the array**: O(n)

## Static Array

A **static array** is a fixed-size data structure where the size of the array is defined at the time of declaration and cannot be changed during runtime.

### Key Characteristics

- **Fixed Size**: The size is determined when the array is created and remains constant.
- **Memory Allocation**: Memory is allocated on the stack (in languages like C and C++) or in the data segment (for global/static arrays).
- **Performance**: 
  - Fast access and updates (O(1)).
  - Insertion or deletion (except at the end) takes O(n).
- **Wasted Space**: Can lead to wasted memory if the allocated size is not fully utilized.

### Example in C

```c
int arr[5]; // Declares a static array of size 5
```

## Dynamic Array

A **dynamic array** is a data structure that can grow or shrink in size during the execution of a program.

### Key Characteristics

- **Resizable**: The size can change based on the requirements.
- **Memory Allocation**: Memory is typically allocated on the heap.
- **Performance**:
  - Accessing and updating elements is O(1).
  - Inserting an element at the end is amortized O(1).
  - Inserting or deleting elements at the beginning or middle takes O(n).
- **Overhead**: Some overhead is involved in maintaining the size and capacity.

### Example in Python

```python
arr = []  # Initializes an empty dynamic array
arr.append(1)  # Adds an element to the end of the array
```

## Key Differences

| Feature                   | Static Array                 | Dynamic Array              |
|---------------------------|------------------------------|----------------------------|
| Size                      | Fixed                        | Resizable                  |
| Memory Allocation         | Stack or Data Segment        | Heap                       |
| Insertion Time Complexity  | O(n) for most positions     | Amortized O(1) at end     |
| Access Time Complexity    | O(1)                        | O(1)                       |
| Wasted Space              | Possible                     | Typically more efficient   |

Both static and dynamic arrays have their use cases, and the choice between them depends on the specific needs of the application.
