# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** 2nqbdhwk7y6-mgikdk4x

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


## C++: Transform Vector

C++ transforms a vector in-place and prints the results.

```cpp
#include <bits/stdc++.h>
using namespace std;
int main(){
  vector<int> v{1,2,3,4,5};
  transform(v.begin(), v.end(), v.begin(), [](int n){return n*2;});
  for (auto n: v) cout<<n<<" ";
  return 0;
}
```


## PHP: JSON Response

Outputs a JSON response in PHP for a simple API endpoint. Illustrates header setting and encoding.

```php
<?php
header('Content-Type: application/json');
echo json_encode(['status' => 'ok', 'time' => time()]);
```


