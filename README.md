# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** 1u77of7bw6g-mh9bfzi1

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


## Python: Fibonacci Generator

A simple, readable Python generator for producing Fibonacci numbers. It illustrates lazy iteration and clarity.

```python
def fib(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

print(list(fib(10)))
```


## PHP: JSON Response

Outputs a JSON response in PHP for a simple API endpoint. Illustrates header setting and encoding.

```php
<?php
header('Content-Type: application/json');
echo json_encode(['status' => 'ok', 'time' => time()]);
```


