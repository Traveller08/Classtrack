import React from 'react';
import PropTypes from 'prop-types';
import '../CSS/ClassCard.css';
const Class = (props) => {
  return (
    <>
        <div className="slide-container">

        <div className="wrapper">
        <div className="clash-card barbarian">
            <div className="clash-card__image clash-card__image--barbarian">
                <img src={'https://mdbootstrap.com/img/Photos/Avatars/avatar.jpg'} alt='user' />
            </div>
            <div className="clash-card__level clash-card__level--barbarian">{props.name}</div>
            <div className="clash-card__unit-name">{props.subject}</div>
            <div className="clash-card__unit-description">
                {props.batch}  {props.sem} Sem
            </div>
            <div className="clash-card__unit-description">
                Code : {props.calsscode}
            </div>

            <div className="admin-card-btn-container">
                <div className="card-btn-circle" onclick="attendanceStats('${data[0]}','${data[2]}','${data[3]}','${data[4]}')">
                    <span className="material-symbols-outlined admin-card-btn">analytics  <span className="icon-tag">Attendance stats</span></span>    
                </div>

                <div className="card-btn-circle" data-mdb-toggle="modal" data-mdb-target="#exampleModal" onclick="listOfStudents('${data[0]}')" >
                    <span className="material-symbols-outlined admin-card-btn">group <span className="icon-tag">List of Students</span></span>
                </div>
                <div className="card-btn-circle card-btn-circle-last">
                    <span className="material-symbols-outlined admin-card-btn">person_add<span className="icon-tag">Add Student</span></span> 
                </div>
                <div className="card-btn-circle card-btn-circle-last">
                    <span className="material-symbols-outlined admin-card-btn">delete<span className="icon-tag">Delete classroom</span></span> 
                </div>
            </div>
        </div>
        </div>
        </div>

    </>
  )
}
Class.propTypes={
    name:   PropTypes.string,
    subject: PropTypes.string,
    batch: PropTypes.string,
    sem: PropTypes.string,
    calsscode:PropTypes.string
};
Class.defaultProps={
    name:"John",
    subject:"CG",
    batch:"B.Tech",
    sem:"6",
    calsscode:"ABCDEF"
};

export default Class;