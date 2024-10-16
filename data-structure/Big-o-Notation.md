# Key Terms 

> Big O Notation 
  
  The notation used to describe the **time complexity** and **space complexity** of algorithms.

  Variable used in Big O notation denote the sizes of input to algorithms. For example, **O(n)** might be the time complexity of an algorithm that traverse through an array of length **n**; similarly, **O(n + m)** might be the time complexity of an algorithm that traverses through an array of length **n** and through a string of length **m**.

  The following are example of common complexity and their Big O notations, ordered from fastest to slowest:

  - **Constant**: O(1)
  - **Logarithmic**: O(log(n))
  - **Linear**: O(n)
  - **Log-linear**:O(nlog(n))
  - **Quadratic**:O(n<sup>2</sup>)
  - **Cubic**:O(n<sup>3</sup>)
  - **Exponential**:O(2<sup>n</sup>)
  - **Factorial**:O(n!)

> Big-O Notation

Big-O notation is a mathematical concept used in computer science to describe the efficiency of an algorithm in terms of time complexity (how long it takes to run) or space complexity (how much memory it uses). It measures how the runtime or memory requirements grow as the input size increases.

> 1. Why Use Big-O Notation?
   - To evaluate how well an algorithm performs as the size of the input grows.
   - It provides a way to classify algorithms based on their worst-case or average-case performance.
   - Helps in choosing the most efficient algorithm for a problem, especially when dealing with large inputs.

> 2. Understanding Input Size
   - Input size, denoted as `n`, refers to the amount of data or elements the algorithm processes. For example, the length of an array or the number of nodes in a tree.
   - Big-O describes how the algorithm’s complexity changes as `n` increases.

> 3. Common Big-O Notations
   - **O(1): Constant Time**
     - The algorithm's runtime does not change regardless of the input size.
     - Example: Accessing an element in an array by index.
   
   - **O(log n): Logarithmic Time**
     - The algorithm's runtime increases logarithmically as the input size increases.
     - Example: Binary search in a sorted array.

   - **O(n): Linear Time**
     - The runtime grows directly in proportion to the input size.
     - Example: Iterating over all elements in an array.

   - **O(n log n): Log-Linear Time**
     - The runtime increases proportionally to `n` multiplied by the logarithm of `n`.
     - Example: Efficient sorting algorithms like Merge Sort and Quick Sort (in their average cases).

   - **O(n^2): Quadratic Time**
     - The runtime is proportional to the square of the input size.
     - Example: Nested loops, such as comparing every element in an array to every other element (like in bubble sort).

   - **O(2^n): Exponential Time**
     - The runtime doubles with each additional input size.
     - Example: Solving the Fibonacci sequence using naive recursion.

   - **O(n!): Factorial Time**
     - The runtime grows factorially as the input size increases.
     - Example: Generating all permutations of a set.

> 4. How to Determine Big-O Complexity?
   - **Focus on the largest term**: For large inputs, constants and smaller terms become negligible, so focus on the term with the most significant impact. For example, `O(n^2 + n)` simplifies to `O(n^2)`.
   - **Drop constants**: Big-O notation ignores constant factors. So, `O(2n)` simplifies to `O(n)`.
   - **Consider worst-case scenarios**: Big-O usually represents the worst-case complexity. For example, for Quick Sort, even though the average case is `O(n log n)`, its worst-case scenario is `O(n^2)`.

> 5. Why It Matters?
   - **Scalability**: Helps to understand how an algorithm scales with larger inputs.
   - **Performance comparison**: Useful for comparing the efficiency of different algorithms and choosing the most optimal one.
   - **Optimization**: Identifying the time and space bottlenecks helps in optimizing algorithms.

> Example: Linear Search (O(n)) vs. Binary Search (O(log n))
   - **Linear Search**: Iterates through each element to find a target. Its time complexity is `O(n)` because in the worst case, it might check each element.
   - **Binary Search**: Works on a sorted list and divides the search interval in half with each step. Its time complexity is `O(log n)` because the number of operations needed is proportional to the logarithm of the input size.

Big-O notation provides a high-level understanding of how algorithms will perform as data sizes grow, making it a crucial concept for developing efficient software solutions.
