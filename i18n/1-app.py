#!/usr/bin/env python3
"""
1-app.py
This module creates a Flask app with
Flask-Babel configuration for internationalization (i18n).
"""

from flask import Flask, render_template
from flask_babel import Babel


class Config:
    """Configuration class for setting up
    languages and timezone for the Flask app.
    """
    LANGUAGES = ['en', 'fr']
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'


app = Flask(__name__)
app.config.from_object(Config)

babel = Babel(app)


@app.route('/')
def index() -> str:
    """Render the home page with internationalization support."""
    return render_template('1-index.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
