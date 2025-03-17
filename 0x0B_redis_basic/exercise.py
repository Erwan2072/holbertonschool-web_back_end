#!/usr/bin/env python3
"""
Module for caching data using Redis.
"""

import redis
import uuid
from typing import Union


class Cache:
    """
    Cache class to interact with Redis for storing data.
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
