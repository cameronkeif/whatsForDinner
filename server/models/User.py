import sys
from os import path
sys.path.append( path.dirname( path.dirname( path.abspath(__file__) ) ) )
from db import DB

class User(DB.Model):
    __tablename__ = "USERS"
    email = DB.Column(DB.String(255), primary_key=True)
    password = DB.Column(DB.String(255), unique=True)

    def __init__(self, email, password):
        self.email = email
        self.password = password

    def __repr__(self):
        return self.email