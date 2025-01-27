#!/usr/bin/python3
""" 2-lifo_cache """
from base_caching import BaseCaching


class LIFOCache(BaseCaching):
    """
    LIFOCache class that inherits from BaseCaching
    """

    def __init__(self):
        """
        LIFOCache class constructor
        """
        super().__init__()
        self.stack = []

    def put(self, key, item):
        """
        Add an item in the cache
        """
        if key is not None and item is not None:
            if key in self.cache_data:
                self.cache_data[key] = item
                return
            if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
                discard = self.stack.pop()
                del self.cache_data[discard]
                print("DISCARD:", discard)
            self.cache_data[key] = item
            self.stack.append(key)

    def get(self, key):
        """
        Get an item by key
        """
        return self.cache_data.get(key, None)
