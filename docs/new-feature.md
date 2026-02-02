# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** reruvcmjy3l-ml5000nl

This document contains a variety of concise, self-contained code examples across multiple programming languages, demonstrating common patterns, data structures, I/O, and control flow to exercise parsing in a realistic yet compact way.

Each example includes a short description followed by a fenced code block.

Where helpful, examples may include brief variations in syntax or structure so the parser encounters a wider range of constructs across different ecosystems.

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


## TypeScript: Typed User Model

This example shows a strongly-typed user interface and a function that formats user info. It highlights TypeScript's type safety.

```typescript
interface User { id: number; name: string; active: boolean }
function formatUser(u: User): string { return `${u.id}:${u.name}:${u.active}` }
console.log(formatUser({ id: 1, name: 'Ada', active: true }));
```


