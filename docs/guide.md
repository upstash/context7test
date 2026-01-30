# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** avw145os37g-ml1hrh9u

This document contains a variety of concise, self-contained code examples across multiple programming languages, demonstrating common patterns, data structures, I/O, and control flow to exercise parsing in a realistic yet compact way.

Each example includes a short description followed by a fenced code block.

Where helpful, examples may include brief variations in syntax or structure so the parser encounters a wider range of constructs across different ecosystems.

## SQL: Group and Order

SQL query that groups by name and orders by count descending.

```sql
SELECT name, COUNT(*) AS c
FROM users
GROUP BY name
ORDER BY c DESC;
```


## Java: Stream Map/Filter

Shows Java streams to map and filter a list, producing a concise pipeline. Demonstrates modern Java idioms.

```java
import java.util.*;
import java.util.stream.*;
class Main {
  public static void main(String[] args) {
    List<Integer> nums = Arrays.asList(1,2,3,4,5);
    List<Integer> doubledEvens = nums.stream()
      .filter(n -> n % 2 == 0)
      .map(n -> n * 2)
      .collect(Collectors.toList());
    System.out.println(doubledEvens);
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


