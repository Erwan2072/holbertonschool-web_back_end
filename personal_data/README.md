# Personal Data Security Project

## Project Overview
This project focuses on handling Personally Identifiable Information (PII) securely. The primary objectives include:
- Identifying and handling PII correctly
- Implementing log filters to obfuscate sensitive information
- Encrypting passwords securely
- Authenticating to a database using environment variables

## Learning Objectives
By the end of this project, you will be able to:
- Identify examples of Personally Identifiable Information (PII)
- Implement a log filter to obfuscate PII fields
- Encrypt and validate passwords securely
- Connect to a database using environment variables

## Technologies Used
- **Python 3.9** (Ubuntu 20.04 LTS)
- **bcrypt** for password encryption
- **MySQL** (via `mysql-connector-python`)
- **Logging module** for secure logging
- **Regular expressions** (`re` module) for data filtering

## Project Requirements
- All files should be executable and follow **pycodestyle (v2.5)**
- Each file should end with a new line
- Use `#!/usr/bin/env python3` as the first line in all scripts
- Include documentation for all modules, classes, and functions
- Ensure manual QA review upon project completion

## File Structure
```
personal_data/
│── filtered_logger.py    # Secure logging and PII filtering
│── encrypt_password.py   # Password hashing and validation
│── main.py               # Entry script for testing
│── README.md             # Project documentation
```

## Implementation Details
### 1. Log Filtering (`filtered_logger.py`)
- **`filter_datum`**: Uses regex to obfuscate sensitive data in log messages
- **`RedactingFormatter`**: Custom log formatter that filters PII fields before logging
- **`get_logger`**: Configures a logger with `RedactingFormatter` to ensure secure logging
- **PII_FIELDS**: Defines sensitive fields that should be obfuscated

### 2. Secure Database Connection (`filtered_logger.py`)
- **`get_db`**: Connects securely to a MySQL database using environment variables

### 3. Secure Password Handling (`encrypt_password.py`)
- **`hash_password`**: Generates a securely salted and hashed password using `bcrypt`
- **`is_valid`**: Verifies that a given password matches a hashed password

### 4. Data Retrieval (`filtered_logger.py`)
- **`main`**: Retrieves user data from the database and logs it with PII obfuscation

## Usage
### Running the Project
Ensure the necessary environment variables are set before running the scripts:
```sh
export PERSONAL_DATA_DB_USERNAME='root'
export PERSONAL_DATA_DB_PASSWORD='root'
export PERSONAL_DATA_DB_HOST='localhost'
export PERSONAL_DATA_DB_NAME='my_db'
```
Then, execute the main script:
```sh
python3 filtered_logger.py
```

### Testing Password Security
```sh
python3 encrypt_password.py
```

## Security Considerations
- **Environment Variables**: Database credentials are never hardcoded, ensuring security.
- **Logging Best Practices**: PII fields are always obfuscated before logging.
- **Password Security**: Uses `bcrypt` for password hashing and verification.

## Author
**By:** Emmanuel Turlay, Staff Software Engineer at Cruise

---

This project follows secure coding practices to ensure the safe handling of sensitive user data.

