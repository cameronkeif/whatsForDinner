"""Users table model"""

from flask import Blueprint

USERS = Blueprint('users', __name__)

@USERS.route('/api/users')
def get():
    """Handles a read operation on users table"""
    output = 2 + 5
    return str(output)
