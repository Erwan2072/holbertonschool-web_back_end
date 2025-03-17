# Redis Basic

## Description
This project introduces how to use Redis with Python for basic operations and simple caching. You will work with data storage, retrieval with type conversion, decorators to track method calls, and using Redis lists to store function input/output history.

All implementations are done in Python 3.9 using the redis Python client.

## Learning Objectives
Understand how to perform basic Redis operations with Python.
Use Redis as a simple cache.
Store and retrieve different data types.
Track and count function calls using decorators.
Store and display function call history using Redis lists.
Installation
Prerequisites
Ubuntu 20.04 LTS
Python 3.9
Redis server
Install Redis
```
sudo apt-get update
sudo apt-get -y install redis-server
sudo sed -i "s/bind .*/bind 127.0.0.1/g" /etc/redis/redis.conf
sudo service redis-server start
Install Python dependencies
```
```
pip3 install redis
Using Redis in a Container
Redis server is stopped by default in containers. To start it:
service redis-server start
```
## Project Structure
. exercise.py: Contains the Cache class and related methods.
. main.py: Test file to validate your implementation.
. README.md: Project overview and instructions.

All Python files must:
Start with the line:
```
#!/usr/bin/env python3
```

Follow pycodestyle 2.5 style guide.
Include proper documentation (module, class, and function docstrings must be full sentences explaining purpose).
Use type annotations for all functions and coroutines.
Features
Task	Description
0. Writing strings to Redis	Implement a Cache class with a store method to save data with a random key
1. Reading from Redis and recovering original type	Implement get, get_str, and get_int methods with optional data conversion
2. Incrementing values	Create a count_calls decorator to count method calls using Redis INCR
3. Storing lists	Create a call_history decorator to store method inputs and outputs in Redis lists
4. Retrieving lists	Implement a replay function to display the call history of a method

Example Usage

```
cache = Cache()

# Store data
key = cache.store("Hello Redis")
print(cache._redis.get(key))  # b'Hello Redis'

# Retrieve with conversion
print(cache.get(key, fn=lambda d: d.decode("utf-8")))  # Hello Redis

# Display call history
replay(cache.store)
```

## Resources
Redis Commands Documentation
Redis Python Client (redis-py)
Redis Crash Course
How to Use Redis With Python

## Author
Project by Emmanuel Turlay, Staff Software Engineer at Cruise
As part of Holberton School – Web Back-End Specialization

