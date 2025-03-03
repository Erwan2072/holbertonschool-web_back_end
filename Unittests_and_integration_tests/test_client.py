#!/usr/bin/env python3
"""
Class to test GithubOrgClient methods
"""

import unittest
from parameterized import parameterized, parameterized_class
from client import GithubOrgClient
from unittest.mock import patch, PropertyMock, Mock


org_payload = {
    "login": "google",
    "id": 1342004,
    "url": "https://api.github.com/orgs/google",
    "repos_url": "https://api.github.com/orgs/google/repos",
}

repos_payload = [
    {
        "id": 1,
        "name": "repo1",
        "license": {"key": "apache-2.0"}
    },
    {
        "id": 2,
        "name": "repo2",
        "license": {"key": "mit"}
    }
]

expected_repos = ["repo1", "repo2"]
apache2_repos = ["repo1"]


@parameterized_class([
    {
        "org_payload": org_payload,
        "repos_payload": repos_payload,
        "expected_repos": expected_repos,
        "apache2_repos": apache2_repos
    }
])
class TestIntegrationGithubOrgClient(unittest.TestCase):
    """Integration tests for GithubOrgClient methods"""

    @classmethod
    def setUpClass(cls) -> None:
        """Set up class method to patch requests.get"""
        cls.get_patcher = patch('client.requests.get',
                                side_effect=cls.get_side_effect)
        cls.mock_get = cls.get_patcher.start()

    @classmethod
    def tearDownClass(cls) -> None:
        """Tear down class method to stop patcher"""
        cls.get_patcher.stop()

    @staticmethod
    def get_side_effect(url: str) -> Mock:
        """
        Side effect method to return the appropriate fixture based on the URL
        """
        if url == "https://api.github.com/orgs/google":
            return Mock(json=lambda: org_payload)
        if url == "https://api.github.com/orgs/google/repos":
            return Mock(json=lambda: repos_payload)
        return Mock(json=lambda: {})

    def test_public_repos(self) -> None:
        """Test the public_repos method"""
        client = GithubOrgClient("google")
        self.assertEqual(client.public_repos(), self.expected_repos)
        self.assertEqual(client.public_repos("apache-2.0"), self.apache2_repos)


if __name__ == "__main__":
    unittest.main()
