create_user_table= '''create table if not exists users(
    user_id carchar(250) not null,
    username varchar(250) not null,
    password varchar(250) not null,
    primary key(user_id)  
)'''

create_admin_table= '''create table if not exists admins(
    admin_id varchar(250) not null,
    username varchar(250) not null,
    password varchar(250) not null,
    primary key(admin_id)  
)'''

create_class_table= '''create table if not exists class(
    admin_id varchar(250) not null,
    class_id varchar(250) not null,
    primary key(class_id),
    foreign key(admin_id) references admins(admin_id)
)'''

create_class_details_table= '''create table if not exists class_details(
    class_id varchar(250) not null,
    semester varchar(250) not null,
    batch varchar(250) not null,
    branch varchar(250) not null,
    subject varchar(250) not null,
    primary key(class_id),
    foreign key(class_id) references class(class_id)
)'''