#!/usr/bin/env python3
"""
4-app.py
This module creates a Flask app with Flask-Babel configuration
and dynamic locale and timezone selection, including template parameterization
and user session simulation.
"""

from flask import Flask, render_template, request, g
from flask_babel import Babel, _
import pytz
from pytz import UnknownTimeZoneError

users = {
    1: {"name": "Balou", "locale": "fr", "timezone": "Europe/Paris"},
    2: {"name": "Beyonce", "locale": "en", "timezone": "US/Central"},
    3: {"name": "Spock", "locale": "kg", "timezone": "Vulcan"},
    4: {"name": "Teletubby", "locale": None, "timezone": "Europe/London"},
}

class Config:
    """Configuration class for setting up languages and timezone for the Flask app."""
    LANGUAGES = ['en', 'fr']
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'

app = Flask(__name__)
app.config.from_object(Config)
babel = Babel(app)

@babel.locale_selector
def get_locale() -> str:
    """Determine the best match for supported languages based on request and user settings."""
    locale = request.args.get('locale')
    if locale in app.config['LANGUAGES']:
        return locale
    if g.get('user') and g.user.get('locale') in app.config['LANGUAGES']:
        return g.user['locale']
    return request.accept_languages.best_match(app.config['LANGUAGES'])

@babel.timezone_selector
def get_timezone() -> str:
    """Determine the appropriate timezone based on URL, user settings, or default to UTC."""
    timezone = request.args.get('timezone')
    if not timezone and g.get('user'):
        timezone = g.user.get('timezone')
    try:
        return pytz.timezone(timezone).zone if timezone else 'UTC'
    except UnknownTimeZoneError:
        return 'UTC'

@app.before_request
def before_request() -> None:
    """Retrieve the user information if login_as is provided in the request."""
    user_id = request.args.get('login_as', type=int)
    g.user = users.get(user_id) if user_id in users else None

@app.route('/')
def index() -> str:
    """Render the home page with dynamic locale and user information."""
    return render_template('4-index.html',
                           home_title=_('home_title'),
                           home_header=_('home_header'),
                           logged_in_as=_('logged_in_as', username=g.user['name']) if g.user else _('not_logged_in'))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
