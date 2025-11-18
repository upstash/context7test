# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** o6wfbcu3y8b-mi4omzoz

This document contains a variety of concise, self-contained code examples across multiple programming languages, demonstrating common patterns, data structures, I/O, and control flow to exercise parsing in a realistic yet compact way.

Each example includes a short description followed by a fenced code block.

Where helpful, examples may include brief variations in syntax or structure so the parser encounters a wider range of constructs across different ecosystems.

## Kotlin: Data Class Copy

Demonstrates Kotlin data classes and the copy method. Encourages immutable-style updates.

```kotlin
data class User(val id:Int, val name:String, val active:Boolean)
fun main(){
  val u1 = User(1, "Ada", true)
  val u2 = u1.copy(active = false)
  println(u2)
}
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


## Swift: Map and Filter

Demonstrates Swift's map and filter on arrays for concise transformation.

```swift
let nums = [1,2,3,4,5]
let evensDoubled = nums.filter { $0 % 2 == 0 }.map { $0 * 2 }
print(evensDoubled)
```


