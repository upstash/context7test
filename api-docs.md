# API Documentation Test

This document contains code snippets and API documentation for testing parsing functionality.

**Document ID:** 1dmq1q2zyacj-mflqhrlf

This document demonstrates API documentation parsing with a mix of code examples and structured API documentation.

## Code Example 1

## C++: Transform Vector

C++ transforms a vector in-place and prints the results.

```cpp
#include <bits/stdc++.h>
using namespace std;
int main(){
  vector<int> v{1,2,3,4,5};
  transform(v.begin(), v.end(), v.begin(), [](int n){return n*2;});
  for (auto n: v) cout<<n<<" ";
  return 0;
}
```


## Code Example 2

## C#: LINQ Query

Filters and projects a sequence using C# LINQ. Demonstrates expressive collection manipulation.

```csharp
using System;
using System.Linq;
class Program {
  static void Main(){
    var nums = new[]{1,2,3,4,5};
    var squares = nums.Where(n=>n%2==1).Select(n=>n*n);
    Console.WriteLine(string.Join(",", squares));
  }
}
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

