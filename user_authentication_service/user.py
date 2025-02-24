#!/bin/usr/python3
"""
User model SQLAlchemy definition
"""
from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    """
    User model
    """
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    email = Column(String(250), nullable=False)
    first_name = Column(String(250))
    last_name = Column(String(250))
    password = Column(String(250))
