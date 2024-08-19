#!/usr/bin/env python3
""" Hypermedia pagination. """

import csv
import math
from typing import List, Dict,


index_range = __import__('0-simple_helper_function').index_range


class Server:
    """
    Server class to paginate
    a database of popular baby names.
    """

    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                self.__dataset = list(reader)[1:]  # Exclude header
        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        dataset = self.dataset()
        start, end_index = index_range(page, page_size)
        return dataset[start:end_index] if start < len(dataset) else []

    def get_hyper(self, page: int = 1, page_size:
                  int = 10) -> Dict[int, List[List]]:
        data = self.get_page(page, page_size)
        total_pages = math.ceil(len(self.dataset()) / page_size)

        return {
            'page_size': len(data),
            'page': page,
            'data': data,
            'next_page': page + 1 if page < total_pages else None,
            'prev_page': page - 1 if page > 1 else None,
            'total_pages': total_pages
        }
