#!/usr/bin/env python3
""" This module contains an asynchronous function that schedules multiple delay tasks
and returns a list of these delays in ascending order.
"""
import asyncio
from typing import List


task_wait_random = __import__('3-tasks').wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """This function creates each task sequentially and awaits its completion before moving to the next,
    collecting all the results into a list which is then returned sorted.
    """
    list_of_delay = []
    for turn in range(n):
        list_of_delay.append(
            await asyncio.create_task(task_wait_random(max_delay)))
    return sorted(list_of_delay)
task_wait_n
