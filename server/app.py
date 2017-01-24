from flask import Flask
from flask_cors import CORS
from api.users import users

app = Flask(__name__)
app.register_blueprint(users)
CORS(app) # TODO add CORS specificity

@app.route("/")
def hello():
    return "Hello World!"

if __name__ == "__main__":
    app.run()

