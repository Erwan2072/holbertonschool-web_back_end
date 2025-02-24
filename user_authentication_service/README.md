# User Authentication Service

## Description
This project implements a user authentication service in Flask with SQLAlchemy and bcrypt. It aims to understand authentication mechanisms by implementing each step, from user management to login and password reset.

## Technologies Used
- **Language**: Python 3.9
- **Web Framework**: Flask
- **Database**: SQLite with SQLAlchemy
- **Cryptography**: bcrypt

## Installation
### Prerequisites
- Python 3.9
- pip (Python package manager)

### Install dependencies
```bash
pip install -r requirements.txt
```

## Running the application
```bash
python3 app.py
```
The application will run on **http://0.0.0.0:5000/**

## Features

### User Management
<details>
  <summary><strong>0. User Model</strong></summary>
  - Create the SQLAlchemy model `User` with the following fields: `id`, `email`, `hashed_password`, `session_id`, `reset_token`.
</details>

<details>
  <summary><strong>1. Add a User</strong></summary>
  - Implement `DB.add_user(email, hashed_password)` to register a user.
</details>

<details>
  <summary><strong>2. Find a User</strong></summary>
  - Implement `DB.find_user_by(**kwargs)` to retrieve a user.
  - Handle `NoResultFound` and `InvalidRequestError` exceptions.
</details>

<details>
  <summary><strong>3. Update a User</strong></summary>
  - Implement `DB.update_user(user_id, **kwargs)` to update user attributes.
</details>

### Authentication & Authorization
<details>
  <summary><strong>4. Password Hashing</strong></summary>
  - Implement `_hash_password(password)` using `bcrypt.hashpw`.
</details>

<details>
  <summary><strong>5. User Registration</strong></summary>
  - Implement `Auth.register_user(email, password)`.
  - Check if the user already exists before registering.
</details>

<details>
  <summary><strong>6. Credentials Validation</strong></summary>
  - Implement `Auth.valid_login(email, password)`.
</details>

<details>
  <summary><strong>7. UUID Generation</strong></summary>
  - Function `_generate_uuid()` to create a unique identifier.
</details>

<details>
  <summary><strong>8. Create Session</strong></summary>
  - Implement `Auth.create_session(email)` to generate a `session_id`.
</details>

<details>
  <summary><strong>9. Find User by Session ID</strong></summary>
  - Implement `Auth.get_user_from_session_id(session_id)`.
</details>

<details>
  <summary><strong>10. Destroy Session</strong></summary>
  - Implement `Auth.destroy_session(user_id)`.
</details>

### API Endpoints
<details>
  <summary><strong>11. Basic Flask App</strong></summary>
  - Route `GET /` returns `{ "message": "Welcome" }`.
</details>

<details>
  <summary><strong>12. User Registration API</strong></summary>
  - Route `POST /users` to create a user.
</details>

<details>
  <summary><strong>13. Login</strong></summary>
  - Route `POST /sessions` to authenticate a user and store the `session_id` in a cookie.
</details>

<details>
  <summary><strong>14. Logout</strong></summary>
  - Route `DELETE /sessions` to log out a user.
</details>

<details>
  <summary><strong>15. User Profile</strong></summary>
  - Route `GET /profile` returns the user’s email if the `session_id` is valid.
</details>

<details>
  <summary><strong>16. Generate Reset Password Token</strong></summary>
  - Implement `Auth.get_reset_password_token(email)`.
</details>

<details>
  <summary><strong>17. Reset Password API</strong></summary>
  - Route `POST /reset_password` generates a reset token.
</details>

<details>
  <summary><strong>18. Update Password</strong></summary>
  - Implement `Auth.update_password(reset_token, password)`.
</details>

<details>
  <summary><strong>19. Password Update API</strong></summary>
  - Route `PUT /reset_password` updates the user’s password.
</details>

## Author
- **Emmanuel Turlay**, Staff Software Engineer at Cruise

## License
This project is licensed under the MIT License.

---

This README is clear, structured, and includes dropdown menus for each task. You can use it directly or ask for modifications! 🚀

