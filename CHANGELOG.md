# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** 6bt1xl9y2ss-mf89vjp6

This document contains a variety of concise, self-contained code examples across multiple programming languages.

Each example includes a short description followed by a fenced code block.

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


## Haskell: Filter and Map

A minimal Haskell example filtering odd numbers and squaring them.

```haskell
main :: IO ()
main = print $ map (^2) $ filter odd [1..10]
```


