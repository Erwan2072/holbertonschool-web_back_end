#!/usr/bin/env python3
"""
Authentication module
"""

from flask import request
from typing import List, TypeVar

class Auth:
    """
    Auth class for API authentication management
    """

    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """ Returns False for now (will be updated later) """
        return False

    def authorization_header(self, request=None) -> str:
        """ Returns None for now (to be implemented later) """
        return None

    def current_user(self, request=None) -> TypeVar('User'):
        """ Returns None for now (to be implemented later) """
        return None
