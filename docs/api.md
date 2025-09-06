# Main Branch API Documentation

Comprehensive API documentation for the main branch version, including all endpoints, authentication methods, and response formats.

## API Configuration

### Base Configuration

```javascript
const mainApi = {
  version: "main",
  baseUrl: "https://api.main.context7.test",
  endpoints: [
    "api/v1/main",
    "api/v1/features",
    "api/v1/experimental"
  ],
  authentication: {
    type: "bearer",
    header: "Authorization"
  },
  rateLimit: {
    requests: 1000,
    window: 60000
  },
  timeout: 30000
};

// API Client for main branch
class MainBranchApiClient {
  constructor(config = mainApi) {
    this.config = { ...mainApi, ...config };
    this.requestCount = 0;
    this.lastRequestTime = null;
  }
  
  async request(endpoint, options = {}) {
    const url = `${this.config.baseUrl}/${endpoint}`;
    
    // Add authentication
    const headers = {
      ...options.headers,
      [this.config.authentication.header]: `Bearer ${options.token || 'default-token'}`
    };
    
    // Track request for rate limiting
    this.requestCount++;
    this.lastRequestTime = new Date();
    
    console.log(`Main branch API request #${this.requestCount} to ${url}`);
    
    // Simulate request with response
    return {
      status: 200,
      data: {
        endpoint,
        version: this.config.version,
        timestamp: this.lastRequestTime.toISOString()
      }
    };
  }
  
  // Get all available features
  async getFeatures() {
    return this.request('api/v1/features');
  }
  
  // Access experimental endpoints
  async getExperimental(feature) {
    return this.request(`api/v1/experimental/${feature}`);
  }
}

module.exports = { mainApi, MainBranchApiClient };
```

## Available Endpoints

### GET /api/v1/main
Returns main branch status and metadata.

### GET /api/v1/features
Lists all available features in the main branch.

### GET /api/v1/experimental/:feature
Access experimental features available only in main branch.

## Response Format

All responses follow a consistent JSON structure with appropriate status codes.
