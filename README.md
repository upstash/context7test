# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** xtl6ekqaspt-mk5b6jro

This document contains a variety of concise, self-contained code examples across multiple programming languages, demonstrating common patterns, data structures, I/O, and control flow to exercise parsing in a realistic yet compact way.

Each example includes a short description followed by a fenced code block.

Where helpful, examples may include brief variations in syntax or structure so the parser encounters a wider range of constructs across different ecosystems.

## Julia: Comprehension

Julia list comprehension generating cubes of a range.

```julia
nums = 1:5
cubes = [n^3 for n in nums]
println(cubes)
```


## JavaScript: Sum Array Elements

This snippet demonstrates summing the numbers in an array using JavaScript's reduce. It showcases a concise, functional approach.

```javascript
const nums = [1, 2, 3, 4, 5];
const total = nums.reduce((acc, n) => acc + n, 0);
console.log(total);
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


