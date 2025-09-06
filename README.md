# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** euqruduw1pk-mf8ozwe5

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


