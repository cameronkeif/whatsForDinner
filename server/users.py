"""Users table model"""

from flask import Blueprint
from db import DB
from models.User import User

USERS = Blueprint('users', __name__)

@USERS.route('/api/users')
def get():
    """Handles a read operation on users table"""
    users = User.query.all()
    return str(users)
