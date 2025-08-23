# Initial API Version 2 Documentation

This document describes the second version of the API with enhanced features and improved performance. Version 2 introduces breaking changes and new capabilities.

## What's New in Version 2

### Breaking Changes
- Updated authentication mechanism
- Modified response format
- Deprecated legacy endpoints

### New Features
- WebSocket support for real-time updates
- Batch processing capabilities
- Enhanced error reporting
- Rate limiting improvements

## Configuration

```javascript
const initialApi2 = {
  version: "2.0.0",
  baseUrl: "https://api.v2.context7.test",
  wsUrl: "wss://ws.context7.test",
  timeout: 60000,
  maxBatchSize: 100,
  rateLimits: {
    requests: 1000,
    window: 60000  // 1 minute
  },
  features: {
    websocket: true,
    batching: true,
    compression: true,
    caching: true
  }
};

// Enhanced API client for version 2
class ApiClientV2 {
  constructor(config = initialApi2) {
    this.config = { ...initialApi2, ...config };
    this.websocket = null;
    this.batchQueue = [];
    this.requestMetrics = {
      total: 0,
      successful: 0,
      failed: 0,
      averageLatency: 0
    };
  }
  
  async connect() {
    if (this.config.features.websocket) {
      // WebSocket connection logic
      console.log(`Connecting to WebSocket: ${this.config.wsUrl}`);
      // Implementation would go here
    }
  }
  
  async batchRequest(requests) {
    if (!this.config.features.batching) {
      throw new Error('Batching not enabled');
    }
    
    if (requests.length > this.config.maxBatchSize) {
      throw new Error(`Batch size exceeds maximum of ${this.config.maxBatchSize}`);
    }
    
    // Process batch
    return requests.map((req, index) => ({
      id: index,
      status: 'success',
      data: req
    }));
  }
  
  getMetrics() {
    return { ...this.requestMetrics };
  }
}

module.exports = { initialApi2, ApiClientV2 };
```

## Migration Guide

To migrate from v1 to v2, update your client configuration and adapt to the new response format.
