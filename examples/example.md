# Example Documentation

This file is in the 'examples' folder and should be excluded when excludeFolders is set to include 'examples'. This comprehensive example documentation demonstrates excluded content.

## Purpose of Examples Folder

The examples folder typically contains:
- Sample implementations
- Demo applications
- Tutorial code
- Testing scenarios

These files are useful for developers but should often be excluded from main documentation parsing to avoid cluttering the primary documentation.

## Example Implementation

This Python example shows functionality that should be excluded from the main documentation:

```python
# This example should be excluded from parsed output
import json
import logging
from datetime import datetime
from typing import Dict, Optional

class ExcludedExample:
    """Example class that should be excluded from documentation parsing."""
    
    def __init__(self, config: Optional[Dict] = None):
        self.config = config or {}
        self.logger = logging.getLogger(__name__)
        self.excluded = True
        self.location = 'examples'
    
    def excluded_example(self, data: Optional[Dict] = None) -> Dict:
        """
        This method should be excluded from the parsed documentation.
        
        Args:
            data: Sample data for the example
        
        Returns:
            Example result that won't be in the docs
        """
        self.logger.info("This log won't appear in parsed documentation")
        
        result = {
            'status': 'excluded',
            'location': self.location,
            'timestamp': datetime.now().isoformat(),
            'message': 'This content is in the examples folder',
            'data': data or {}
        }
        
        return result
    
    def demo_functionality(self):
        """Demonstration method for example purposes only."""
        print("This is example code that should be excluded")
        return "Excluded from documentation"

# Example usage that won't be in docs
if __name__ == "__main__":
    example = ExcludedExample()
    result = example.excluded_example({'test': 'data'})
    print(json.dumps(result, indent=2))
```

## Why Exclude Examples?

Examples are excluded to keep the main documentation focused on actual API and implementation details rather than sample code.
