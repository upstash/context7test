# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** bvp3jgeyuww-mf8osoab

This document contains a variety of concise, self-contained code examples across multiple programming languages.

Each example includes a short description followed by a fenced code block.

## Elixir: Enum Pipeline

Elixir pipeline that filters even numbers and inspects the result.

```elixir
nums = 1..10 |> Enum.to_list()
evens = Enum.filter(nums, fn n -> rem(n, 2) == 0 end)
IO.inspect(evens)
```


