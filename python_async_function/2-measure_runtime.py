#!/usr/bin/env python3
"""
Measure the runtime of asynchronous tasks.
"""
import asyncio
import time
from 1-concurrent_coroutines import wait_n

def measure_time(n: int, max_delay: int) -> float:
    """Measures total execution time for wait_n divided by n."""
    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.time()
    return (end_time - start_time) / n
