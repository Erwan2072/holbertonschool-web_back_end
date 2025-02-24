#!/usr/bin/env python3
"""
Basic Flask app
"""

from flask import Flask, request, jsonify
from auth import Auth

app = Flask(__name__)
AUTH = Auth()


@app.route("/", methods=["GET"])
def welcome():
    """
    Simple GET route that returns a welcome message.
    """
    return jsonify({"message": "Bienvenue"}), 200


@app.route("/users", methods=["POST"])
def register_user():
    """
    Endpoint to register a new user.

    Expected form data:
    - email (str): The user's email
    - password (str): The user's password

    Returns:
        JSON response with a success or error message.
    """
    # Récupération des données du formulaire
    email = request.form.get("email")
    password = request.form.get("password")

    # Vérification si les champs sont bien fournis
    if not email or not password:
        return jsonify({"message": "Missing email or password"}), 400

    try:
        # Tentative d'enregistrement du nouvel utilisateur
        user = AUTH.register_user(email, password)
        return jsonify({"email": user.email, "message": "user created"}), 200
    except ValueError:
        # Gestion du cas où l'utilisateur existe déjà
        return jsonify({"message": "email already registered"}), 400


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
