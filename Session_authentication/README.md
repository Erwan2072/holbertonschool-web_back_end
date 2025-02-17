# Session Authentication Project

## Description
This project implements session-based authentication for a REST API. The goal is to understand the mechanism behind session authentication by building it from scratch, rather than using pre-built modules like Flask-HTTPAuth. This authentication method is useful for web applications where session IDs are stored as cookies.

## Learning Objectives
By completing this project, you will learn:
- The meaning and purpose of authentication
- How session authentication works
- What cookies are and how they are used in authentication
- How to send and retrieve cookies
- How to implement session authentication in a REST API

## Requirements
- All files will be interpreted/compiled on **Ubuntu 20.04 LTS** using **Python 3.9**
- All Python scripts must be executable
- Code style must follow **pycodestyle (version 2.5)**
- Each module, class, and function must include documentation
- A `README.md` file at the root of the project folder is mandatory

## Directory Structure
```
Session_authentication/
│-- api/
│   ├── v1/
│   │   ├── __init__.py
│   │   ├── app.py
│   │   ├── auth/
│   │   │   ├── __init__.py
│   │   │   ├── auth.py
│   │   │   ├── session_auth.py
│   │   ├── views/
│   │   │   ├── __init__.py
│   │   │   ├── users.py
│   │   │   ├── session_auth.py
│-- models/
│   ├── user.py
│-- main_0.py
│-- main_1.py
│-- main_2.py
│-- main_3.py
│-- main_4.py
│-- README.md
```

## Implementation Details
### 1. Copying Basic Authentication Work
- The project is based on **0x06. Basic Authentication**.
- Adds a new `GET /api/v1/users/me` endpoint to retrieve the authenticated user.

### 2. Implementing Session Authentication
- **SessionAuth class** (`session_auth.py`)
  - Inherits from `Auth` class
  - Manages session IDs in-memory
  - Methods:
    - `create_session(user_id: str) -> str`: Generates a session ID
    - `user_id_for_session_id(session_id: str) -> str`: Retrieves a user ID from a session ID
    - `current_user(request) -> User`: Retrieves a user from a session ID stored in cookies
    - `destroy_session(request) -> bool`: Deletes a session ID

### 3. Managing Sessions via Cookies
- **Session Cookie Handling**
  - Added `session_cookie(request)` method in `auth.py`
  - Uses an environment variable `SESSION_NAME` for session cookie name
  - Extracts session ID from the request

### 4. Updating Flask Routes
- **`app.py` Updates**
  - Includes `@app.before_request` to handle session authentication
  - Excludes `/api/v1/auth_session/login/` from authentication requirements
  - Requires either an authorization header or session cookie

- **New Authentication View** (`session_auth.py`)
  - Adds `POST /api/v1/auth_session/login` for logging in with session authentication
  - Uses cookies to store session IDs
  - Adds `DELETE /api/v1/auth_session/logout` to log out users

## Usage
### Running the API
```sh
API_HOST=0.0.0.0 API_PORT=5000 AUTH_TYPE=session_auth SESSION_NAME=_my_session_id python3 -m api.v1.app
```

### API Endpoints
#### Authentication
- `POST /api/v1/auth_session/login`
  - Logs in a user and returns a session cookie
  - Requires `email` and `password`
- `DELETE /api/v1/auth_session/logout`
  - Logs out a user by destroying their session

#### User Management
- `GET /api/v1/users`
  - Retrieves all users (requires authentication)
- `GET /api/v1/users/me`
  - Retrieves the currently authenticated user

### Example Usage with cURL
#### Logging in
```sh
curl -X POST "http://0.0.0.0:5000/api/v1/auth_session/login" -d "email=test@holberton.io" -d "password=test"
```
#### Accessing user information
```sh
curl -X GET "http://0.0.0.0:5000/api/v1/users/me" --cookie "_my_session_id=<SESSION_ID>"
```
#### Logging out
```sh
curl -X DELETE "http://0.0.0.0:5000/api/v1/auth_session/logout" --cookie "_my_session_id=<SESSION_ID>"
```

## Conclusion
This project provides a fundamental understanding of session-based authentication in web applications. It enables secure user sessions using cookies, making it a practical authentication method for REST APIs. While real-world applications would use frameworks like Flask-Login, this implementation gives an in-depth understanding of session authentication mechanisms.

