"""Users table model"""

from flask import Blueprint
from flask import request
from flask import jsonify
from flask import json

import bcrypt

from db import DB
from models.User import User

USERS = Blueprint('users', __name__)

@USERS.route('/api/users/authenticate')
def get():
    """Handles a read operation on users table"""
    status = 'failed'
    email = request.args.get('email')
    password = request.args.get('password')
    user = User.query.filter_by(email=email).first()
    if user and bcrypt.hashpw(password.encode('utf-8'), user.password.encode('utf-8')) == user.password:
        status = 'success' # User exists and the password matches
    return jsonify({'result': status})

@USERS.route('/api/users/register', methods = ['POST'])
def register_user():
    """Handles a read operation on users table"""
    email = request.args.get('email')
    password = request.args.get('password')

    if not (email and password):
        status = 'failed' # Email or password was not provided
        reason = 'Email or password was not provided.'
    elif User.query.filter_by(email = email).first() is not None:
        status = 'failed' # user already exists
        reason = '{0} already exists.'.format(email)
    else:
        hashedPassword = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        user = User(email, hashedPassword)
        DB.session.add(user)
        DB.session.commit()
        status = "success"

    returnJsonDict = {'result': status}
    if (status == 'failed'):
        returnJsonDict['reason'] = reason
    return jsonify(returnJsonDict)
