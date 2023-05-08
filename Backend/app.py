from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
import os
from flask_mysqldb import MySQL



app = Flask(__name__)
app.config['MYSQL_HOST']=os.getenv('MYSQL_HOST')
app.config['MYSQL_USER']=os.getenv('MYSQL_USER')
app.config['MYSQL_PASSWORD']=os.getenv('MYSQL_PASSWORD')
app.config['MYSQL_DB']=os.getenv('MYSQL_DB')

db=MySQL(app)

app.config['PORT'] = 5000
app.config['DEBUG'] = True
CORS(app)
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')
JWT = JWTManager(app)



from .Routes import classrooms, login, add_classroom
app.register_blueprint(login.login)
app.register_blueprint(classrooms.classrooms)
app.register_blueprint(add_classroom.add_classroom)

@app.route('/')
def home():
    return "You are on classtrack backend root route "

if __name__ == '__main__':
    print("running...")
    app.run(debug=True, port=5001)
