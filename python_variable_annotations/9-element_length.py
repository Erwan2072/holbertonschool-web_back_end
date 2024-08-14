#!/usr/bin/env python3
"""element length function"""

from typing import Sequence, Tuple, List, Dict, Any


def element_length(lst: Sequence[Sequence]) -> List[Tuple[Sequence, int]]:
    """element length function"""
    return [(i, len(i)) for i in lst]
