# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** 2aukfqghwsr-mh55jc60

This document contains a variety of concise, self-contained code examples across multiple programming languages, demonstrating common patterns, data structures, I/O, and control flow to exercise parsing in a realistic yet compact way.

Each example includes a short description followed by a fenced code block.

Where helpful, examples may include brief variations in syntax or structure so the parser encounters a wider range of constructs across different ecosystems.

## Dart: Map Over List

Dart example mapping over a list and printing the result.

```dart
void main() {
  final nums = [1,2,3,4,5];
  final tripled = nums.map((n) => n * 3).toList();
  print(tripled);
}
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


