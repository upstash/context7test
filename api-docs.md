# API Documentation Test

This document contains code snippets and API documentation for testing parsing functionality.

**Document ID:** ccdbux4dupf-miiyrj3x

This document demonstrates API documentation parsing with a mix of code examples and structured API documentation.

## Code Example 1

## SQL: Group and Order

SQL query that groups by name and orders by count descending.

```sql
SELECT name, COUNT(*) AS c
FROM users
GROUP BY name
ORDER BY c DESC;
```


## Code Example 2

## Haskell: Filter and Map

A minimal Haskell example filtering odd numbers and squaring them.

```haskell
main :: IO ()
main = print $ map (^2) $ filter odd [1..10]
```


## API Documentation

### POST /api/users

#### Description
Creates a new user account in the system

#### Method
POST

#### Endpoint
/api/users

#### Parameters
#### Request Body
- **username** (string) - Required - The unique username for the account
- **email** (string) - Required - User's email address
- **password** (string) - Required - User's password (minimum 8 characters)
- **firstName** (string) - Optional - User's first name
- **lastName** (string) - Optional - User's last name

#### Request Example
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword123",
  "firstName": "John",
  "lastName": "Doe"
}

#### Response
#### Success Response (200)
- **id** (number) - The unique user ID
- **username** (string) - The username
- **email** (string) - The email address
- **createdAt** (string) - ISO timestamp of creation
- **updatedAt** (string) - ISO timestamp of last update

#### Response Example
{
  "id": 123,
  "username": "johndoe",
  "email": "john@example.com",
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}

#### Status Codes
- 201: User created successfully
- 400: Bad Request - Invalid input data
- 409: Conflict - Username or email already exists
- 500: Internal Server Error

