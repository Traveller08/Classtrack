def check_user(username,password):
    return f'''select * from users where username='{username}' and password='{password}' '''

def check_admin(username,password):
    return f'''select * from admins where username='{username}' and password='{password}' '''

def get_classes(admin_id):
    return f'''
        select * 
        from class
        inner join class_details 
        on class.class_id=class_details.class_id
        where class.admin_id={admin_id}
        '''

def insert_into_class(**kwargs):
    return f'''
        insert into class (admin_id,class_id)
        values ('{kwargs['admin_id']}','{kwargs['class_id']}')
        '''
def insert_into_class_details(**kwargs):
    return f'''
        insert into class_details (class_id , semester, batch, branch, subject)
        values (
            '{kwargs['class_id']}', '{kwargs['semester']}', '{kwargs['batch']}', '{kwargs['branch']}',  '{kwargs['subject']}'   
        )
        '''


