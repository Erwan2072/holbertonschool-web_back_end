Pagination Project
This project, designed by Emmanuel Turlay at Cruise, focuses on implementing various pagination techniques in Python. The primary goal is to enable students to understand and apply pagination methods to datasets, particularly using simple parameters and hypermedia metadata, even in scenarios where data may be deleted.

Prerequisites
Python 3.7
Ubuntu 18.04 LTS
pycodestyle (version 2.5.*)
Setup
Clone the repository and navigate to the pagination directory:

bash
Copier le code
git clone https://github.com/<your-github-username>/holbertonschool-web_back_end.git
cd holbertonschool-web_back_end/pagination
Use the Popular_Baby_Names.csv file provided within the repository as the dataset for pagination tasks.

Learning Objectives
By the end of this project, you should be able to:

Implement pagination with simple page and page_size parameters.
Enhance pagination with hypermedia metadata.
Ensure pagination is resilient to data deletions, maintaining consistent data access for users.

<details>
<summary>Click to see: Tasks</summary>

Task 0: Simple Helper Function
Create a function index_range that calculates the start and end index for a page of items given page and page_size parameters. This function is foundational for implementing pagination in subsequent tasks.

Task 1: Simple Pagination
Implement the Server class which includes a method get_page to fetch a specific page of baby names from the dataset using the previously defined index_range.

Task 2: Hypermedia Pagination
Extend the Server class with a get_hyper method, which not only returns the paginated data but also includes metadata such as next and previous page numbers, total pages, and more.

Task 3: Deletion-Resilient Hypermedia Pagination
Modify the Server class to handle deletions in the dataset without affecting the user's navigation through paginated results. Implement the get_hyper_index method that continues to provide accurate pagination even after data deletions.

Requirements
All Python files must use the #!/usr/bin/env python3 shebang.
All Python files must end with a new line.
Your code should adhere to the pycodestyle (version 2.5.*).
Every module, function, and method must include a documentation string.
Usage
Each task includes a test file demonstrating how to use the functions or classes developed. For example:

bash
Copier le code
./0-main.py
This will execute the code for Task 0, outputting the calculated range for given pagination parameters.
