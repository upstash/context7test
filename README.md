# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** 28zbbm1fd3v-mf89tzdx

This document contains a variety of concise, self-contained code examples across multiple programming languages.

Each example includes a short description followed by a fenced code block.

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


## Ruby: Word Count

Counts word frequencies in a sentence using Ruby’s expressive standard library. Simple and readable.

```ruby
text = "to be or not to be"
counts = Hash.new(0)
text.split.each { |w| counts[w] += 1 }
puts counts
```


## Swift: Map and Filter

Demonstrates Swift's map and filter on arrays for concise transformation.

```swift
let nums = [1,2,3,4,5]
let evensDoubled = nums.filter { $0 % 2 == 0 }.map { $0 * 2 }
print(evensDoubled)
```


