# Dedup Test Document

This file is generated for E2E dedup testing.

**Document ID:** kdgu1dsgjfr-mimbmh9s

## Part 1: Getting Started with JavaScript

This section covers basic JavaScript operations including array manipulation.

## JavaScript: Sum Array Elements

This snippet demonstrates summing the numbers in an array using JavaScript's reduce. It showcases a concise, functional approach.

```javascript
const nums = [1, 2, 3, 4, 5];
const total = nums.reduce((acc, n) => acc + n, 0);
console.log(total);
```


---

## Part 2: Python Examples

This section contains Python code examples for different use cases.

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


---

## Part 3: Advanced Topics

This section contains additional examples and advanced patterns.

### Configuration Management

Before diving into the code examples, ensure your environment is properly configured. Check that all dependencies are installed and your runtime version matches the requirements.

### Error Handling Best Practices

Always wrap your code in try-catch blocks when dealing with external APIs or file operations. This ensures graceful degradation and better user experience.

### Performance Considerations

When working with large datasets, consider using generators or streaming approaches to minimize memory usage.

### Additional Code Examples

The following example demonstrates array operations in JavaScript using a functional approach.

## JavaScript: Sum Array Elements

This snippet demonstrates summing the numbers in an array using JavaScript's reduce. It showcases a concise, functional approach.

```javascript
function sumArray(arr) {
  return arr.reduce((sum, val) => sum + val, 0);
}

const numbers = [10, 20, 30, 40];
console.log(sumArray(numbers)); // 100
```


