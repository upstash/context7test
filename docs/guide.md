# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** r021seflc0a-mhxgjkoc

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


