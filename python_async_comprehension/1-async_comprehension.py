#!/usr/bin/env python3
""" Let's execute multiple coroutines at the same time with async """

import asyncio
wait_random = __import__('0-async_generator').wait_random


async def async_comprehension() -> list[float]:
    """ Collect 10 random numbers using an async comprehensing over async_generator """
    return [i async for i in wait_random()]
