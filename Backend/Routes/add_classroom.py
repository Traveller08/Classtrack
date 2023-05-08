from flask import request, Blueprint
from ..app import db
from ..Schemas import tables, queries
add_classroom = Blueprint('add_classroom', __name__)


@add_classroom.route('/add/classroom', methods=['GET'])
def create_classroom():
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
        cur.execute(queries.insert_into_class(data))
        cur.commit()
        cur.execute(queries.insert_into_class_details(data))
        cur.commit()
        data = cur.fetchall()
        data1=[]
        for i in data:
            data1.append(i)
        return {
            "message":"classroom added successfully",
            "error":None,
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