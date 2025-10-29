# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** s8jsn6hbwh-mhbaao17

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


## Ruby: Word Count

Counts word frequencies in a sentence using Ruby’s expressive standard library. Simple and readable.

```ruby
text = "to be or not to be"
counts = Hash.new(0)
text.split.each { |w| counts[w] += 1 }
puts counts
```


## Elixir: Enum Pipeline

Elixir pipeline that filters even numbers and inspects the result.

```elixir
nums = 1..10 |> Enum.to_list()
evens = Enum.filter(nums, fn n -> rem(n, 2) == 0 end)
IO.inspect(evens)
```


