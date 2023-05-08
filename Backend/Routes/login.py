from flask import request, Blueprint
from ..app import db
from flask_jwt_extended import create_access_token
from ..Schemas import tables, queries
login = Blueprint('login', __name__)


@login.route('/login/user', methods=['POST'])
def userlogin():
    data = request.json
    if not data:
        return {
            "message": "Please provide user details",
            "data": None,
            "error": "bad request"
        }, 400

    username = request.json['username']
    password = request.json['password']

    is_validated = validate_user_with_username_and_password(
        username, password, True)

    if is_validated['status'] != "OK":
        return {
            "message": "Invalid credentials",
            "data": None,
            "error": is_validated['error']
        }, 400

    access_token = create_access_token(identity=username)
    return {
        "message": "user logged in successfully",
        "data": {
            "access_token": access_token,
            "user_type": "user"
        },
        "error": None
    }


@login.route('/login/admin', methods=['POST'])
def adminlogin():
    data = request.json
    if not data:
        return {
            "message": "Please provide user details",
            "data": None,
            "error": "bad request"
        }, 400

    username = request.json['username']
    password = request.json['password']

    is_validated = validate_user_with_username_and_password(
        username, password, False)
    print(is_validated)
    if is_validated[0]['status'] != "OK":
        return {
            "message": "Invalid credentials",
            "data": None,
            "error": is_validated[0]['message']
        }, 400

    access_token = create_access_token(identity=username)
    return {
        "message": "user logged in successfully",
        "data": {
            "access_token": access_token,
            "user_type": "admin"
        },
        "error": None
    }


def validate_user_with_username_and_password(username, password, is_user):
    cur = db.connection.cursor()
    try:
        if is_user:
            cur.execute(tables.create_user_table)
            db.connection.commit()
            cur.execute(queries.check_user(
                username=username, password=password))
            if cur.fetchone():
                return {
                    "message": "correct credentials",
                    "error": None,
                    "status": "OK"
                }, 200
            else:
                return {
                    "message": "Invalid credentials",
                    "error": None,
                    "status": "FAILED"
                }, 205

        else:
            cur.execute(tables.create_admin_table)
            db.connection.commit()
            cur.execute(queries.check_admin(
                username=username, password=password))
            print(queries.check_admin(username=username, password=password))
            if cur.fetchone():
                return {
                    "message": "correct credentials",
                    "error": None,
                    "status": "OK"
                }, 200
            else:
                return {
                    "message": "Invalid credentials",
                    "error": None,
                    "status": "FAILED"
                }, 205

    except Exception as error:
        return {
            "message": "database error",
            "error": error,
            "status": "FAILED"
        }, 500
    finally:
        if cur:
            cur.close()
