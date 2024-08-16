#!/usr/bin/env python3
"""
Concurrently run multiple instances of the wait_random coroutine.
"""
import asyncio
from 0-basic_async_syntax import wait_random

async def wait_n(n: int, max_delay: int) -> list:
    """Spawns wait_random n times with the specified max_delay."""
    tasks = [wait_random(max_delay) for _ in range(n)]
    completed = []
    for future in asyncio.as_completed(tasks):
        result = await future
        completed.append(result)
    return completed
