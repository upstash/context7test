# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** mtdlzdfbkjf-mh9bb5h7

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


## Bash: Count Files

Counts files in the current directory using common shell tools.

```bash
FILES=$(ls | wc -l)
echo "Files: $FILES"
```


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


