// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Forms/Login';
import Class from './components/Card/Class';
import SignupAdmin from './components/Forms/SignupAdmin';
import SignupUser from './components/Forms/SignupUser';
import Sidebar from './Sidenav/Sidebar';
function App() {
  return (
    <div className="App">
      <Navbar auth={false} photoUrl="https://picsum.photos/id/237/200/300" username="akshay" />
      <Login admin={true}/> 
      <Sidebar />
      <Class />
      {/* <SignupAdmin /> */}
      {/* <SignupUser /> */}
      {/* <header className="App-header">
        Hello moto
      </header> */}
      
    </div>
  );
}

export default App;
