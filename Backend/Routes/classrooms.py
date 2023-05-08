from flask import request, Blueprint
from ..app import db
from flask_jwt_extended import create_access_token
from ..Schemas import tables, queries
classrooms = Blueprint('classrooms', __name__)


@classrooms.route('/classrooms', methods=['GET'])
def get_classrooms():
    form_data = request.json
    if not form_data:
        return {
            "message":"Invalid request",
            "error":"missing details",
            "status":"OK"
        },400
    
    cur=db.connection.cursor()
    try:
        
        cur.execute(tables.create_class_table)
        cur.commit()
        cur.execute(tables.create_class_details_table)
        cur.commit()
        cur.execute(queries.get_classes())
        data = cur.fetchall()
        data1=[]
        for i in data:
            data1.append(i)
        return {
            "message":"class list fetched successfully",
            "error":None,
            "data":data1,
            "status":"OK"
        },500


    except Exception as error:
        print("error ",error)
        return {
            "message":"database error",
            "error":"error while connecting to database",
            "status":"OK"
        },500
    finally:
        if cur:
            cur.close()