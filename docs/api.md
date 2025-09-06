# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** 8tsk19faaxr-mf89t9ke

This document contains a variety of concise, self-contained code examples across multiple programming languages.

Each example includes a short description followed by a fenced code block.

## Dart: Map Over List

Dart example mapping over a list and printing the result.

```dart
void main() {
  final nums = [1,2,3,4,5];
  final tripled = nums.map((n) => n * 3).toList();
  print(tripled);
}
```


## TypeScript: Typed User Model

This example shows a strongly-typed user interface and a function that formats user info. It highlights TypeScript's type safety.

```typescript
interface User { id: number; name: string; active: boolean }
function formatUser(u: User): string { return `${u.id}:${u.name}:${u.active}` }
console.log(formatUser({ id: 1, name: 'Ada', active: true }));
```


