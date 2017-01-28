""" Primary application controller """

from flask import Flask
from flask_cors import CORS
from users import USERS
from db import DB

APP = Flask(__name__)
APP.config.from_object('config')

APP.register_blueprint(USERS)
CORS(APP) # TODO add CORS specificity

DB.init_app(APP)

@APP.route("/")
def hello():
    """Sample hello world output"""
    return "Hello World!"

if __name__ == "__main__":
    APP.run()

