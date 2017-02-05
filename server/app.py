""" Primary application controller """

from flask import Flask
from flask import redirect, url_for, request
from flask_cors import CORS
from users import USERS
from db import DB

APP = Flask(__name__, static_folder="../client", static_url_path='')
APP.config.from_object('config')

APP.register_blueprint(USERS)
CORS(APP) # TODO add CORS specificity

DB.init_app(APP)

@APP.route("/")
def root():
    """Sample hello world output"""
    return redirect(url_for('static', filename='index.html'))

if __name__ == "__main__":
    APP.run()

