#!/usr/bin/env python3
"""Module to summarize stats about Nginx logs stored in MongoDB."""

from pymongo import MongoClient

def log_stats():
    """Function to print stats about Nginx logs stored in MongoDB."""
    client = MongoClient('mongodb://127.0.0.1:27017')
    nginx_collection = client.logs.nginx

    # Total number of documents
    total_logs = nginx_collection.count_documents({})
    print(f"{total_logs} logs")

    # Methods count
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    print("Methods:")
    for method in methods:
        count = nginx_collection.count_documents({"method": method})
        print(f"    method {method}: {count}")

    # GET requests to path /status
    status_check = nginx_collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{status_check} status check")
