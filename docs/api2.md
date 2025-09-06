# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** g64oo00fwv7-mf8oxkxl

This document contains a variety of concise, self-contained code examples across multiple programming languages.

Each example includes a short description followed by a fenced code block.

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


