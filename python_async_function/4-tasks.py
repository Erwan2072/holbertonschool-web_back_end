#!/usr/bin/env python3
"""
Alter wait_n to use tasks.
"""
import asyncio

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> list:
    """Run task_wait_random n times and return the list of delays."""
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    completed = []
    for future in asyncio.as_completed(tasks):
        result = await future
        completed.append(result)
    return completed
