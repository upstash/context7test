# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** py6lkcgkt9j-mfzteeyj

This document contains a variety of concise, self-contained code examples across multiple programming languages, demonstrating common patterns, data structures, I/O, and control flow to exercise parsing in a realistic yet compact way.

Each example includes a short description followed by a fenced code block.

Where helpful, examples may include brief variations in syntax or structure so the parser encounters a wider range of constructs across different ecosystems.

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


## Elixir: Enum Pipeline

Elixir pipeline that filters even numbers and inspects the result.

```elixir
nums = 1..10 |> Enum.to_list()
evens = Enum.filter(nums, fn n -> rem(n, 2) == 0 end)
IO.inspect(evens)
```


