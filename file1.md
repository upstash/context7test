# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** lelmousu4m-mf89us2b

This document contains a variety of concise, self-contained code examples across multiple programming languages.

Each example includes a short description followed by a fenced code block.

## Ruby: Word Count

Counts word frequencies in a sentence using Ruby’s expressive standard library. Simple and readable.

```ruby
text = "to be or not to be"
counts = Hash.new(0)
text.split.each { |w| counts[w] += 1 }
puts counts
```


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


