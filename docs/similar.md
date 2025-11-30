# Dedup Test Document - semantic-duplicate

This file is generated for E2E dedup testing.

**Document ID:** ykv44igmr5-milz6o7f

This document contains semantically similar code snippets to test deduplication.

## JavaScript: Calculate Array Sum

Shows how to calculate the sum of all numbers in an array using a for...of loop. A straightforward iterative approach to array summation.

```javascript
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (const num of numbers) {
  sum += num;
}
console.log(sum);
```


## TypeScript: User Type Definition

Defines a User type with id, name and active status fields. Demonstrates how to create and use typed objects in TypeScript.

```typescript
type UserType = {
  id: number;
  name: string;
  active: boolean;
};

const user: UserType = { id: 1, name: 'Ada', active: true };
console.log(`User: ${user.name} (ID: ${user.id})`);
```


