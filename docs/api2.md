# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** mrjcs70rxtf-mf8ozwe8

This document contains a variety of concise, self-contained code examples across multiple programming languages.

Each example includes a short description followed by a fenced code block.

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


