from flask import Blueprint

users = Blueprint('users', __name__)

@users.route('/api/users')
def get():
    return "hello world!"