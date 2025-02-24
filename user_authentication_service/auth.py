#!/usr/bin/env python3
"""
Authentication module
"""

from db import DB
from user import User
from sqlalchemy.orm.exc import NoResultFound
import bcrypt


class Auth:
    """Auth class to interact with the authentication database."""

    def __init__(self):
        """
        Initialize Auth instance with a database connection
        """
        self._db = DB()

    def register_user(self, email: str, password: str) -> User:
        """
        Register a new user with hashed password.
        """
        try:
            # Vérifier si l'utilisateur existe déjà
            self._db.find_user_by(email=email)
            raise ValueError(f"User {email} already exists")
        except NoResultFound:
            # L'utilisateur n'existe pas, on peut l'ajouter
            hashed_password = self._hash_password(password)
            new_user = self._db.add_user(email, hashed_password.decode())
            # Stocké en string
            return new_user

    def _hash_password(self,password: str) -> bytes:
        """
        Hashes a password using bcrypt.
        """
        salt = bcrypt.gensalt()
        return bcrypt.hashpw(password.encode(), salt)
