#!/usr/bin/env python3
""" Simple helper function for pagination. """

import csv
from typing import List


def index_range(page: int, page_size: int) -> tuple:
    """
    Calculate the start and end index for a page and page size.
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)


class Server:
    """
    Server class to paginate
    a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Return a list of the dataset, loading it if not already loaded."""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                self.__dataset = list(reader)[1:]  # Exclude header
        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Return a page of the dataset."""
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        dataset = self.dataset()
        start_index, end_index = index_range(page, page_size)

    # Check if the start_index is within the range of the dataset
        if start_index >= len(dataset):
            return []

    # Return the appropriate page of the dataset
        return dataset[start_index:end_index]
