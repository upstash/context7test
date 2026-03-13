# Test Refresh Project

## Overview
A test project for verifying default context refresh functionality.
This project now includes user, auth, product, and order services.

## User Service
The user service handles user creation and lookup operations.

## Auth Service
The auth service handles authentication and token verification.

## Product Service
The product service manages product creation, stock updates, and listings.

## Order Service
The order service handles order creation, status updates, and order history.

## Installation
```bash
npm install test-refresh
```

## Usage
```typescript
import { UserService } from './src/user';
import { AuthService } from './src/auth';
import { ProductService } from './src/product';
import { OrderService } from './src/order';

const userService = new UserService();
const productService = new ProductService();
const orderService = new OrderService();

const user = await userService.createUser('john', 'john@example.com');
const product = await productService.createProduct('Widget', 9.99);
const order = await orderService.createOrder(user.id, [{ productId: product.id, price: 9.99, quantity: 2 }]);
```
