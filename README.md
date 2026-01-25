# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** 5y63n17ar52-mkt1mio4

This document contains a variety of concise, self-contained code examples across multiple programming languages, demonstrating common patterns, data structures, I/O, and control flow to exercise parsing in a realistic yet compact way.

Each example includes a short description followed by a fenced code block.

Where helpful, examples may include brief variations in syntax or structure so the parser encounters a wider range of constructs across different ecosystems.

## Julia: Comprehension

Julia list comprehension generating cubes of a range.

```julia
nums = 1:5
cubes = [n^3 for n in nums]
println(cubes)
```


## TypeScript: Typed User Model

This example shows a strongly-typed user interface and a function that formats user info. It highlights TypeScript's type safety.

```typescript
interface User { id: number; name: string; active: boolean }
function formatUser(u: User): string { return `${u.id}:${u.name}:${u.active}` }
console.log(formatUser({ id: 1, name: 'Ada', active: true }));
```


## Bash: Count Files

Counts files in the current directory using common shell tools.

```bash
FILES=$(ls | wc -l)
echo "Files: $FILES"
```


