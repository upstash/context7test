# Guide

This documentation should be included because the 'docs' folder is not in the exclude list. This guide provides comprehensive information about the system.

## Overview

The documentation in this folder represents important content that should be parsed and included in the Context7 output. This validates that:

1. Non-excluded directories are properly included
2. Documentation folders are processed correctly
3. Content meets minimum size requirements
4. Multiple file types are supported

## Configuration Example

Here's how to configure the system to include specific documentation:

```javascript
// This configuration should be included in the parsed output
const includedConfig = {
  feature: "included",
  directory: "docs",
  shouldParse: true,
  minimumSize: 500,
  settings: {
    processMarkdown: true,
    extractCodeBlocks: true,
    includeInSearch: true,
    priority: 'high'
  }
};

// Function to validate included content
function validateIncludedContent(content) {
  if (!content || content.length < includedConfig.minimumSize) {
    console.warn('Content does not meet minimum size requirements');
    return false;
  }
  
  console.log('Content validated and included');
  return true;
}

// Process documentation files
function processDocumentation(filePath, content) {
  const result = {
    path: filePath,
    included: true,
    size: content.length,
    timestamp: new Date().toISOString(),
    config: includedConfig
  };
  
  if (validateIncludedContent(content)) {
    result.status = 'processed';
  } else {
    result.status = 'skipped';
  }
  
  return result;
}

module.exports = { includedConfig, validateIncludedContent, processDocumentation };
```

## Best Practices

Always ensure documentation files contain sufficient content to be meaningful and meet parsing requirements.
