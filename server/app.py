""" Primary application controller """

from flask import Flask
from flask_cors import CORS
from server.api.users import USERS

APP = Flask(__name__)
APP.register_blueprint(USERS)
CORS(APP) # TODO add CORS specificity

@APP.route("/")
def hello():
    """Sample hello world output"""
    return "Hello World!"

if __name__ == "__main__":
    APP.run()

