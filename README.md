# Exclude Folders Test

This repository tests the exclude folders functionality of Context7. This file should be included in the parsed output because it's in the root directory.

## Purpose

This test validates that the Context7 parser correctly excludes specified directories while including all other content. The exclude folders feature is essential for:

- Ignoring test directories
- Skipping example code that shouldn't be in documentation
- Excluding build artifacts
- Omitting temporary or cache directories

## Included Content

This README file and other root-level documentation should always be included in the parsing results.

### JavaScript Implementation

```javascript
// This function should be included in the parsed output
function includedFunction(options = {}) {
  const defaults = {
    includeInDocs: true,
    importance: 'high',
    category: 'core'
  };
  
  const config = { ...defaults, ...options };
  
  console.log('This function is in the root directory and should be included');
  console.log('Configuration:', config);
  
  return {
    status: 'included',
    location: 'root',
    timestamp: new Date().toISOString(),
    config: config
  };
}

// Additional included functionality
function processIncludedData(data) {
  if (!data || typeof data !== 'object') {
    throw new Error('Invalid data provided');
  }
  
  return {
    processed: true,
    included: true,
    data: data
  };
}

module.exports = { includedFunction, processIncludedData };
```

## Documentation Standards

All included files should meet the minimum content requirements and provide meaningful documentation.
