# File 1 Documentation

This file contains JavaScript examples for testing the page removal functionality. When this file is removed, the number of snippets should decrease accordingly.

## Overview

This documentation file serves as a test fixture for the Context7 page removal feature. It contains multiple code snippets that should be properly counted and indexed during the initial parse.

## JavaScript Example 1: User Greeting Function

This function demonstrates basic string interpolation and parameter handling:

```javascript
// Greeting function with proper documentation
function greetUser(name, options = {}) {
  const defaults = {
    prefix: 'Hello',
    suffix: '!',
    formal: false
  };
  
  const settings = { ...defaults, ...options };
  
  if (settings.formal) {
    return `Dear ${name}, welcome to our system.`;
  }
  
  return `${settings.prefix}, ${name}${settings.suffix}`;
}

// Example usage
console.log(greetUser('Alice'));
console.log(greetUser('Bob', { formal: true }));
```

## JavaScript Example 2: Configuration Object

This example shows a comprehensive configuration structure:

```javascript
// Application configuration with multiple settings
const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retryAttempts: 3,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  features: {
    enableLogging: true,
    debugMode: false,
    cacheResults: true
  },
  endpoints: {
    users: '/api/v1/users',
    posts: '/api/v1/posts',
    comments: '/api/v1/comments'
  }
};

module.exports = config;
```

## Summary

This file contains essential JavaScript code examples that will be removed during the test.
