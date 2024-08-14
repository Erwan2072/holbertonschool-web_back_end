#!/usr/bin/env python3
"""
This module provides a function to compute the floor of a floating-point number.
"""

import math


def floor(n: float) -> int:
    """
    Returns the floor of the floating-point number n.

    Args:
        n (float): The number to compute the floor of.

    Returns:
        int: The largest integer less than or equal to n.
    """
    return math.floor(n)
