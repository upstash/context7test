# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** nil3iw4a60i-mf8s78qo

This document contains a variety of concise, self-contained code examples across multiple programming languages, demonstrating common patterns, data structures, I/O, and control flow to exercise parsing in a realistic yet compact way.

Each example includes a short description followed by a fenced code block.

Where helpful, examples may include brief variations in syntax or structure so the parser encounters a wider range of constructs across different ecosystems.

## Elixir: Enum Pipeline

Elixir pipeline that filters even numbers and inspects the result.

```elixir
nums = 1..10 |> Enum.to_list()
evens = Enum.filter(nums, fn n -> rem(n, 2) == 0 end)
IO.inspect(evens)
```


## R: Vector Arithmetic

Simple R vector example computing squares of a sequence.

```r
nums <- 1:5
squares <- nums^2
print(squares)
```


