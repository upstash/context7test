# API Documentation Test

This document contains code snippets and API documentation for testing parsing functionality.

**Document ID:** 2b0y4e8tkck-mfzti74p

This document demonstrates API documentation parsing with a mix of code examples and structured API documentation.

## Code Example 1

## Elixir: Enum Pipeline

Elixir pipeline that filters even numbers and inspects the result.

```elixir
nums = 1..10 |> Enum.to_list()
evens = Enum.filter(nums, fn n -> rem(n, 2) == 0 end)
IO.inspect(evens)
```


## Code Example 2

## Swift: Map and Filter

Demonstrates Swift's map and filter on arrays for concise transformation.

```swift
let nums = [1,2,3,4,5]
let evensDoubled = nums.filter { $0 % 2 == 0 }.map { $0 * 2 }
print(evensDoubled)
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

