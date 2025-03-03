# Unittests and Integration Tests

## 📋 Project Overview
This project is dedicated to mastering unit and integration testing in Python using the `unittest` framework. The main focus is on testing strategies such as mocking, parameterization, and fixtures to enhance code reliability and maintainability.

### 🛠 Project Specifications
- **Environment:** Ubuntu 20.04 LTS
- **Python Version:** 3.9
- **Style Guide:** pycodestyle (v2.5)
- **Testing Framework:** unittest
- **Documentation:** All modules, classes, and functions must be documented.
- **Type Annotations:** Mandatory for all functions and coroutines.

---

## 📂 Project Tasks

### 🔍 Unit Tests

<details>
  <summary>1. Parameterize a Unit Test</summary>
  - **Objective:** Create `TestAccessNestedMap` class inheriting from `unittest.TestCase`.
  - **Approach:**
    - Use `@parameterized.expand` to test `utils.access_nested_map`.
    - Test for the following inputs:
      ```python
      nested_map={"a": 1}, path=("a",)
      nested_map={"a": {"b": 2}}, path=("a",)
      nested_map={"a": {"b": 2}}, path=("a", "b")
      ```
    - Validate with `assertEqual` to ensure expected results.
</details>

<details>
  <summary>2. Exception Handling in Unit Tests</summary>
  - **Objective:** Test for `KeyError` exceptions using `assertRaises`.
  - **Inputs:**
    ```python
    nested_map={}, path=("a",)
    nested_map={"a": 1}, path=("a", "b")
    ```
  - **Validation:** Ensure the exception message is as expected.
</details>

<details>
  <summary>3. Mocking HTTP Calls</summary>
  - **Class:** `TestGetJson(unittest.TestCase)`
  - **Mocking Strategy:**
    - Use `unittest.mock.patch` to avoid external HTTP requests.
    - Mock `requests.get` to return predefined JSON payloads.
    - Test inputs:
      ```python
      test_url="http://example.com", test_payload={"payload": True}
      test_url="http://holberton.io", test_payload={"payload": False}
      ```
  - **Verification:** Ensure `requests.get` is called once per input.
</details>

<details>
  <summary>4. Testing Memoization</summary>
  - **Decorator:** `utils.memoize`
  - **Class Setup:**
    ```python
    class TestClass:
        def a_method(self):
            return 42

        @memoize
        def a_property(self):
            return self.a_method()
    ```
  - **Mocking:** Use `unittest.mock.patch` to mock `a_method`.
  - **Expected Behavior:** Calling `a_property` twice calls `a_method` only once.
</details>

### 🌐 Integration Tests

<details>
  <summary>5. Mocking Properties</summary>
  - **Method:** `GithubOrgClient._public_repos_url`
  - **Mocking Strategy:** Use patching to simulate the behavior of the `org` property.
  - **Validation:** Ensure the method returns the expected URL based on the mocked payload.
</details>

<details>
  <summary>6. Advanced Patching Techniques</summary>
  - **Class:** `TestGithubOrgClient`
  - **Objective:** Unit-test `GithubOrgClient.public_repos`.
  - **Mocking Strategy:**
    - Decorator and context manager approaches for API responses.
    - Mock `get_json` and `_public_repos_url`.
  - **Validation:** Check the list of repositories matches the expected payload.
</details>

<details>
  <summary>7. Parameterizing License Checks</summary>
  - **Method:** `GithubOrgClient.has_license`
  - **Inputs:**
    ```python
    repo={"license": {"key": "my_license"}}, license_key="my_license"
    repo={"license": {"key": "other_license"}}, license_key="my_license"
    ```
  - **Expected Outcome:** Ensure the method accurately identifies the correct license.
</details>

<details>
  <summary>8. Integration Test with Fixtures</summary>
  - **Class:** `TestIntegrationGithubOrgClient`
  - **Setup:**
    - Use `setUpClass` and `tearDownClass` from `unittest.TestCase` API.
    - Apply `@parameterized_class` with fixtures from `fixtures.py`.
  - **Mocking Strategy:**
    - Start a patcher (`get_patcher`) for `requests.get`.
    - Use `side_effect` to return appropriate JSON payloads for each URL.
  - **Cleanup:** Ensure the patcher is stopped in `tearDownClass`.
</details>

---

## 🚀 How to Run Tests
```sh
python -m unittest path/to/test_file.py
```

## 📁 Project Repository
[GitHub Repository](https://github.com/holbertonschool-web_back_end)

---

## 👨‍💻 Author
Emmanuel Turlay, Staff Software Engineer at Cruise
Erwan Lebreton, student at Holberton School
