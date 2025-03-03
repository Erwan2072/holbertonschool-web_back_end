#!/usr/bin/env python3
"""Module for testing access_nested_map function."""

import unittest
from parameterized import parameterized
from utils import access_nested_map


class TestAccessNestedMap(unittest.TestCase):
    """TestCase for access_nested_map function."""

    @parameterized.expand([
        ({"a": 1}, ("a",), 1),
        ({"a": {"b": 2}}, ("a",), {"b": 2}),
        ({"a": {"b": 2}}, ("a", "b"), 2),
    ])
    def test_access_nested_map(self, nested_map: dict,
                               path: tuple, expected: any) -> None:
        """Test access_nested_map returns the expected output."""
        self.assertEqual(access_nested_map(nested_map, path), expected)

    @parameterized.expand([
        ({}, ("a",)),
        ({"a": 1}, ("a", "b")),
    ])
    def test_access_nested_map_exception(self, nested_map: dict,
                                         path: tuple) -> None:
        """Test that access_nested_map raises KeyError for invalid path."""
        with self.assertRaises(KeyError) as context:
            access_nested_map(nested_map, path)
        self.assertEqual(str(context.exception), f"'{path[-1]}'")


class TestGetJson(unittest.TestCase):
    """Test the utils.get_json function from utils"""

    @parameterized.expand([
        ("http://example.com", {"payload": True}),
        ("http://holberton.io", {"payload": False}),
    ])
    @patch('requests.get')
    def test_get_json(self, test_url, test_payload, mock_get):
        """function test_get_json"""
        # Configure the mock response
        mock_response = Mock()
        mock_response.json.return_value = test_payload
        mock_get.return_value = mock_response

        # Call the function under test
        result = get_json(test_url)

        # Assertions
        self.assertEqual(result, test_payload)
        mock_get.assert_called_once_with(test_url)


if __name__ == '__main__':
    unittest.main()
