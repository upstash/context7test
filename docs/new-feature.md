# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** rwd25eh78y-mjuf60ow

This document contains a variety of concise, self-contained code examples across multiple programming languages, demonstrating common patterns, data structures, I/O, and control flow to exercise parsing in a realistic yet compact way.

Each example includes a short description followed by a fenced code block.

Where helpful, examples may include brief variations in syntax or structure so the parser encounters a wider range of constructs across different ecosystems.

## SQL: Group and Order

SQL query that groups by name and orders by count descending.

```sql
SELECT name, COUNT(*) AS c
FROM users
GROUP BY name
ORDER BY c DESC;
```


## Haskell: Filter and Map

A minimal Haskell example filtering odd numbers and squaring them.

```haskell
main :: IO ()
main = print $ map (^2) $ filter odd [1..10]
```


