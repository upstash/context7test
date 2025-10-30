# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** dvyr86aqqda-mhdmork3

This document contains a variety of concise, self-contained code examples across multiple programming languages, demonstrating common patterns, data structures, I/O, and control flow to exercise parsing in a realistic yet compact way.

Each example includes a short description followed by a fenced code block.

Where helpful, examples may include brief variations in syntax or structure so the parser encounters a wider range of constructs across different ecosystems.

## Bash: Count Files

Counts files in the current directory using common shell tools.

```bash
FILES=$(ls | wc -l)
echo "Files: $FILES"
```


## Go: HTTP Server

A minimal HTTP server in Go that responds with a greeting. It demonstrates net/http usage.

```go
package main
import (
    "fmt"
    "net/http"
)
func main(){
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request){
        fmt.Fprintln(w, "Hello from Go!")
    })
    http.ListenAndServe(":8080", nil)
}
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


