# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** xng2qo1imy-mf8or6jx

This document contains a variety of concise, self-contained code examples across multiple programming languages.

Each example includes a short description followed by a fenced code block.

## Bash: Count Files

Counts files in the current directory using common shell tools.

```bash
FILES=$(ls | wc -l)
echo "Files: $FILES"
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


