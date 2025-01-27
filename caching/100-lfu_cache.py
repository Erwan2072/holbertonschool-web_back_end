#!/usr/bin/python3
""" 100-LFU_cache """

from base_caching import BaseCaching


class LFUCache(BaseCaching):
    """ LFU caching system """
    def __init__(self):
        """ Constructor """
        super().__init__()
        self.freq = {}

    def put(self, key, item):
        """ Add an item in the cache """
        if key and item:
            if key in self.cache_data:
                self.cache_data[key] = item
                self.freq[key] += 1
            elif len(self.cache_data) >= BaseCaching.MAX_ITEMS:
                discard = min(self.freq, key=self.freq.get)
                del self.cache_data[discard]
                del self.freq[discard]
                print("DISCARD:", discard)
            self.cache_data[key] = item
            self.freq[key] = 1

    def get(self, key):
        """ Get an item by key """
        if key in self.cache_data:
            self.freq[key] += 1
            return self.cache_data[key]
        return None
