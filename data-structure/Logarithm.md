# Key Terms 

> Logarithm

  A mathematical concept that's widely used in Computer Science and that's defined by the following equation:

   ***log<sub>b</sub>(X) = y*** if and only if ***b<sup>Y</sup> = x***

   In the context of coding interviews, the logarithm is used to describe the complexity analysis of algorithms, and its usage always implies a logarithm of base ***2***. In the other words, the logarithm used in the context of coding interviews is defined by the following equation:

   ***log(n) = y*** and only if ***2<sup>y</sub> = n ***

   In plain English, if an algorithm has a logarithmic time complexity (***O(log(n)),*** Where n is the size of the input), then whenever the algorithm's input double in size (I.e., whenever ***n*** doubles), the number of operations needed to complete the algorithm only increases by one unit. Conversely, an algorithm with a linear time complexity would see its number of operations double if its input size doubled.

   As an example, a linear-time-complexity algorithm with an input of size 1,000 might take roughly 1,000 operations to complete, whereas a logarithmic-time-complexity algorithm with the same input would take roughly 10 operations to complete, since ***2<sup>10</sup> ~= 1,000.***