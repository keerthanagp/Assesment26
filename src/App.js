import React, {useState} from "react";
import Dashboard from "./components/Dashboard";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import Sidebar from "./components/Sidebar";
import AssignMentor from "./components/AssignMentor";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardContextComponent from "./components/context/DashboardContextComponent";

function App() {

  let [flag,setFlag] = useState(false)
  
  return <>
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">

            <Routes>
              <Route path='/dashboard' element={
                                                <DashboardContextComponent>
                                                  <Dashboard flag={flag} setFlag={setFlag}/>
                                                </DashboardContextComponent>
                                              }/>
              <Route path='/create-user' element={<CreateUser flag={flag} setFlag={setFlag}/>} />
              <Route path='/edit-user/:id' element={<EditUser flag={flag} setFlag={setFlag}/>} />
              <Route path='/profile/:id' element={<Profile flag={flag} setFlag={setFlag}/>} />
              <Route path='/edit-profile/:id' element={<EditProfile flag={flag} setFlag={setFlag}/>} />
              <Route path='/assign-mentor/:id' element={<AssignMentor flag={flag} setFlag={setFlag}/>} />
              
              <Route path="/*" element={<Navigate to="/dashboard" />}></Route>
            </Routes>

          </div>
        </div>
      </div>
    </BrowserRouter>
  </>
}

export default App;