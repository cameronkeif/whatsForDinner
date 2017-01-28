"""Users table model"""

from flask import Blueprint
from flask import request
from flask import jsonify

from db import DB
from models.User import User

USERS = Blueprint('users', __name__)

@USERS.route('/api/users')
def get():
    """Handles a read operation on users table"""
    status = 'failed'
    email = request.args.get('email')
    password = request.args.get('password')
    user = User.query.filter_by(email=email).first()
    if (user):
        pass # check hashed password, set status = success if match
    return jsonify({'result': status})
