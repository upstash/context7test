# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** 1vevaxapcqfi-mgr3feuj

This document contains a variety of concise, self-contained code examples across multiple programming languages, demonstrating common patterns, data structures, I/O, and control flow to exercise parsing in a realistic yet compact way.

Each example includes a short description followed by a fenced code block.

Where helpful, examples may include brief variations in syntax or structure so the parser encounters a wider range of constructs across different ecosystems.

## JavaScript: Sum Array Elements

This snippet demonstrates summing the numbers in an array using JavaScript's reduce. It showcases a concise, functional approach.

```javascript
const nums = [1, 2, 3, 4, 5];
const total = nums.reduce((acc, n) => acc + n, 0);
console.log(total);
```


## C#: LINQ Query

Filters and projects a sequence using C# LINQ. Demonstrates expressive collection manipulation.

```csharp
using System;
using System.Linq;
class Program {
  static void Main(){
    var nums = new[]{1,2,3,4,5};
    var squares = nums.Where(n=>n%2==1).Select(n=>n*n);
    Console.WriteLine(string.Join(",", squares));
  }
}
```


## R: Vector Arithmetic

Simple R vector example computing squares of a sequence.

```r
nums <- 1:5
squares <- nums^2
print(squares)
```


