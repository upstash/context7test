# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** 7w3pjlch6n2-mgqysdld

This document contains a variety of concise, self-contained code examples across multiple programming languages, demonstrating common patterns, data structures, I/O, and control flow to exercise parsing in a realistic yet compact way.

Each example includes a short description followed by a fenced code block.

Where helpful, examples may include brief variations in syntax or structure so the parser encounters a wider range of constructs across different ecosystems.

## Bash: Count Files

Counts files in the current directory using common shell tools.

```bash
FILES=$(ls | wc -l)
echo "Files: $FILES"
```


## Ruby: Word Count

Counts word frequencies in a sentence using Ruby’s expressive standard library. Simple and readable.

```ruby
text = "to be or not to be"
counts = Hash.new(0)
text.split.each { |w| counts[w] += 1 }
puts counts
```


## Haskell: Filter and Map

A minimal Haskell example filtering odd numbers and squaring them.

```haskell
main :: IO ()
main = print $ map (^2) $ filter odd [1..10]
```


