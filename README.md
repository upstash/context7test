# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** zmd182rjtt-mkn6bt7a

This document contains a variety of concise, self-contained code examples across multiple programming languages, demonstrating common patterns, data structures, I/O, and control flow to exercise parsing in a realistic yet compact way.

Each example includes a short description followed by a fenced code block.

Where helpful, examples may include brief variations in syntax or structure so the parser encounters a wider range of constructs across different ecosystems.

## TypeScript: Typed User Model

This example shows a strongly-typed user interface and a function that formats user info. It highlights TypeScript's type safety.

```typescript
interface User { id: number; name: string; active: boolean }
function formatUser(u: User): string { return `${u.id}:${u.name}:${u.active}` }
console.log(formatUser({ id: 1, name: 'Ada', active: true }));
```


## JavaScript: Sum Array Elements

This snippet demonstrates summing the numbers in an array using JavaScript's reduce. It showcases a concise, functional approach.

```javascript
const nums = [1, 2, 3, 4, 5];
const total = nums.reduce((acc, n) => acc + n, 0);
console.log(total);
```


