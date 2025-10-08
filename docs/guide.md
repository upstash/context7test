# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** 5c2br1aq9en-mgiix8o1

This document contains a variety of concise, self-contained code examples across multiple programming languages, demonstrating common patterns, data structures, I/O, and control flow to exercise parsing in a realistic yet compact way.

Each example includes a short description followed by a fenced code block.

Where helpful, examples may include brief variations in syntax or structure so the parser encounters a wider range of constructs across different ecosystems.

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


## Julia: Comprehension

Julia list comprehension generating cubes of a range.

```julia
nums = 1:5
cubes = [n^3 for n in nums]
println(cubes)
```


## Swift: Map and Filter

Demonstrates Swift's map and filter on arrays for concise transformation.

```swift
let nums = [1,2,3,4,5]
let evensDoubled = nums.filter { $0 % 2 == 0 }.map { $0 * 2 }
print(evensDoubled)
```


