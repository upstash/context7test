# File 2 Documentation

This file contains Python examples that will remain after file1.md is removed. This tests the system's ability to correctly update the snippet count after file removal.

## Purpose

The page removal test validates that Context7 properly handles the deletion of documentation files and updates all relevant metrics accordingly.

## Python Example 1: Mathematical Operations

A comprehensive calculation function with error handling:

```python
# Enhanced calculation function with validation
def calculate_sum(a, b, validate=True):
    """
    Calculate the sum of two numbers with optional validation.
    
    Args:
        a: First number
        b: Second number
        validate: Whether to validate inputs
    
    Returns:
        The sum of a and b
    
    Raises:
        TypeError: If inputs are not numeric
    """
    if validate:
        if not isinstance(a, (int, float)) or not isinstance(b, (int, float)):
            raise TypeError("Both arguments must be numeric")
    
    result = a + b
    print(f"Calculating: {a} + {b} = {result}")
    return result

# Example usage
if __name__ == "__main__":
    print(calculate_sum(5, 3))
    print(calculate_sum(2.5, 1.5))
```

## Python Example 2: Object-Oriented Calculator

A full-featured calculator class with multiple operations:

```python
# Calculator class with method chaining support
class Calculator:
    """Advanced calculator with operation history."""
    
    def __init__(self):
        self.result = 0
        self.history = []
    
    def add(self, value):
        """Add a value to the current result."""
        self.result += value
        self.history.append(f"Added {value}")
        return self
    
    def subtract(self, value):
        """Subtract a value from the current result."""
        self.result -= value
        self.history.append(f"Subtracted {value}")
        return self
    
    def multiply(self, value):
        """Multiply the current result by a value."""
        self.result *= value
        self.history.append(f"Multiplied by {value}")
        return self
    
    def clear(self):
        """Reset the calculator."""
        self.result = 0
        self.history = []
        return self
    
    def get_history(self):
        """Return the operation history."""
        return self.history

# Usage example
calc = Calculator()
result = calc.add(10).multiply(2).subtract(5).result
print(f"Final result: {result}")
```

## Conclusion

These Python examples demonstrate the code that will persist after partial file removal.
