# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** drd90if8akc-mf8ozwe8

This document contains a variety of concise, self-contained code examples across multiple programming languages.

Each example includes a short description followed by a fenced code block.

## Rust: Read Lines

Reads lines from stdin and echoes them in Rust. Highlights ownership-light IO usage.

```rust
use std::io::{self, BufRead};
fn main(){
    let stdin = io::stdin();
    for line in stdin.lock().lines() {
        println!("{}", line.unwrap());
    }
}
```


