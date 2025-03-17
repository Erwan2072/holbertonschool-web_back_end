#!/usr/bin/env python3
"""
Test file for Cache.get with type conversion.
"""

Cache = __import__('exercise').Cache

cache = Cache()

TEST_CASES = {
    b"foo": None,                         # Stored as bytes, retrieved as bytes
    123: int,                            # Stored as int, retrieved and converted with int()
    "bar": lambda d: d.decode("utf-8")   # Stored as str, retrieved and decoded to str
}

for value, fn in TEST_CASES.items():
    key = cache.store(value)
    result = cache.get(key, fn=fn)
    assert result == value, f"Failed test with value={value}, got={result}"
print("✅ All test cases passed.")
