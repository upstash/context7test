# Test Refresh Project

## Overview
A test project for verifying default context refresh functionality.

## User Service
The user service handles user creation and lookup operations.

## Auth Service
The auth service handles authentication and token verification.

## Installation
```bash
npm install test-refresh
```

## Usage
```typescript
import { UserService } from './src/user';
import { AuthService } from './src/auth';

const userService = new UserService();
const authService = new AuthService();

const user = await userService.createUser('john', 'john@example.com');
const token = await authService.login('john', 'password');
```
