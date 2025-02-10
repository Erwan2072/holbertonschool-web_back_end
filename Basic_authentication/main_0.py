#!/usr/bin/env python3
""" Main 0: Test Auth class """

import sys
import os

# Ajouter le dossier parent au chemin Python
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from api.v1.auth.auth import Auth

a = Auth()

print(a.require_auth("/api/v1/status/", ["/api/v1/status/"]))  # Doit afficher False
print(a.authorization_header())  # Doit afficher None
print(a.current_user())  # Doit afficher None
