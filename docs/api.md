# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** 081o3jhz9k7e-mgiiadxr

This document contains a variety of concise, self-contained code examples across multiple programming languages, demonstrating common patterns, data structures, I/O, and control flow to exercise parsing in a realistic yet compact way.

Each example includes a short description followed by a fenced code block.

Where helpful, examples may include brief variations in syntax or structure so the parser encounters a wider range of constructs across different ecosystems.

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


## Python: Fibonacci Generator

A simple, readable Python generator for producing Fibonacci numbers. It illustrates lazy iteration and clarity.

```python
def fib(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

print(list(fib(10)))
```


