# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** 2izuged4j9a-mf8oso6p

This document contains a variety of concise, self-contained code examples across multiple programming languages.

Each example includes a short description followed by a fenced code block.

## Scala: List Pipeline

Uses Scala collections to filter and map a list with a clear pipeline.

```scala
object Main {
  def main(args: Array[String]): Unit = {
    val nums = List(1,2,3,4,5)
    val oddsSquared = nums.filter(_ % 2 == 1).map(n => n*n)
    println(oddsSquared)
  }
}
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


