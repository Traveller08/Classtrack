import React from 'react';
import Button from './Button';
import './CSS/Navbar.css';
const Navbar = (props) => {
  return (
    <>
      <div className='navbarr'>
          <div className="left-navr">
          
                  <div className="nav-logor">
                    classTrack
                  </div>
                  <div className="nav-itemr">Home</div>
                  <div className="nav-itemr">Features</div>
                  <div className="nav-itemr cu">Contact us</div>
              
          </div>
          <div className="right-navr">
          {
              !props.auth?(
                <>
                  <div className='nav-itemr'>
                    <Button class="b-outr btnr" text="user"/>
                    <Button class="b-outr btnr btn-2r" text="admin"/>
                  </div>
                </>
              ):(
                <>
                 <div className="profile-photo-divr nav-itemr">
                  <img className='profile-photor' src={props.photoUrl} alt="user" />
                 </div>
                 <div className="profile-namer nav-itemr">{props.username}</div>
                 <div className="nav-itemr">
                  <Button class="b-outr btnr" text="logout"/>  
                 </div>

                </>
              )
            }
          </div>  
      </div>
    </>
  )
}

export default Navbar;