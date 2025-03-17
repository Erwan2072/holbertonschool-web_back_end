#!/usr/bin/env python3
"""
Module for caching data using Redis with type support.
"""

import redis
import uuid
from typing import Union, Callable, Optional


class Cache:
    """
    Cache class to interact with Redis for storing and retrieving data.
    """

    def __init__(self):
        """
        Initialize Redis client and flush the database.
        """
        self._redis = redis.Redis()
        self._redis.flushdb()

    def store(self, data: Union[str, bytes, int, float]) -> str:
        """
        Store data in Redis with a random key and return the key.

        Args:
            data: The data to store (str, bytes, int, float).

        Returns:
            The key under which the data was stored.
        """
        key = str(uuid.uuid4())
        self._redis.set(key, data)
        return key

    def get(self, key: str, fn: Optional[Callable[[bytes], Union[str, int, float, bytes]]] = None) -> Union[str, int, float, bytes, None]:
        """
        Retrieve data from Redis and optionally apply a conversion function.

        Args:
            key: The Redis key.
            fn: Optional function to convert the bytes data.

        Returns:
            The data, converted if fn is provided; raw bytes otherwise.
        """
        data = self._redis.get(key)
        if data is None:
            return None
        if fn:
            return fn(data)
        return data

    def get_str(self, key: str) -> Optional[str]:
        """
        Retrieve a UTF-8 string from Redis.

        Args:
            key: The Redis key.

        Returns:
            The decoded string if exists, else None.
        """
        data = self.get(key, fn=lambda d: d.decode('utf-8'))
        return data

    def get_int(self, key: str) -> Optional[int]:
        """
        Retrieve an integer from Redis.

        Args:
            key: The Redis key.

        Returns:
            The integer value if exists, else None.
        """
        data = self.get(key, fn=int)
        return data
