import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Profile({flag,setFlag}) {

  let params = useParams()
  
  let [studentsPic,setStudentsPic] = useState()
  let [studentsName,setStudentsName] = useState()
  let [studentsEmail,setStudentsEmail] = useState()
  let [studentsMobile,setStudentsMobile] = useState()
  let [studentsCity,setStudentsCity] = useState()
  let [studentsFullAddress,setStudentsFullAddress] = useState()
  let [studentsPincode,setStudentsPincode] = useState()
  let [studentsBatch,setStudentsBatch] = useState()
  let [mentorsPic,setMentorsPic] = useState()
  let [mentorsName,setMentorsName] = useState()
  let [mentorsEmail,setMentorsEmail] = useState()
  let [mentorsMobile,setMentorsMobile] = useState()
  let [mentorsCity,setMentorsCity] = useState()
  let [mentorsFullAddress,setMentorsFullAddress] = useState()
  let [mentorsPincode,setMentorsPincode] = useState()

  let navigate = useNavigate()
  

  let getStudents = async ()=> {
    try {
      let res = await axios.get(`${'https://649f374c245f077f3e9d6f05.mockapi.io/students'}/${params.id}`)
      if(res.status===200){
        setStudentsPic(res.data.studentsPic)
        setStudentsName(res.data.studentsName)
        setStudentsEmail(res.data.studentsEmail)
        setStudentsMobile(res.data.studentsMobile)
        setStudentsCity(res.data.studentsCity)
        setStudentsFullAddress(res.data.studentsFullAddress)
        setStudentsPincode(res.data.studentsPincode)
        setStudentsBatch(res.data.studentsBatch)
      }
  
    } catch (error) {
      console.log(error)
    }
  }

  let getMentors = async ()=> {
    try {
      let res = await axios.get(`${'https://649f374c245f077f3e9d6f05.mockapi.io/mentors'}/${params.id}`)
      if(res.status===200){
        setMentorsPic(res.data.mentorsPic)
        setMentorsName(res.data.mentorsName)
        setMentorsEmail(res.data.mentorsEmail)
        setMentorsMobile(res.data.mentorsMobile)
        setMentorsCity(res.data.mentorsCity)
        setMentorsFullAddress(res.data.mentorsFullAddress)
        setMentorsPincode(res.data.mentorsPincode)
      }
  
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=> {
    if(params.id)
    {
      getStudents()
      getMentors()
    }
    else 
    {
      navigate('/dashboard')
    }
    
  },[navigate,params.id])

  function studentsProfile() {
    return <>
    <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-2">
    <h1 className="h1 mb-0 text-gray-800">Student Profile Section</h1>
    <i className="fa-solid fa-user-pen" style={{color: "#4e73df",fontSize:"2.5rem"}} onClick={()=>{navigate(`/edit-profile/${params.id}`)}}></i>
 </div>

    <div style={{display:"flex", flexDirection:"row-reverse", justifyContent:"center", alignItems:"center"}}>

 <img src={studentsPic} style={{height:"425px", width:"350px", marginLeft:"50px"}} alt='dp'></img>

 <Form style={{width:"60%"}}>
 <Form.Group className="mb-3">
     <Form.Label>Name</Form.Label>
     <Form.Control type="text" placeholder="Enter Name" value={studentsName} readOnly/>
   </Form.Group>

   <Form.Group className="mb-3">
     <Form.Label>Email address</Form.Label>
     <Form.Control type="email" placeholder="Enter Email" value={studentsEmail} readOnly/>
   </Form.Group>

   <Form.Group className="mb-3">
     <Form.Label>Mobile</Form.Label>
     <Form.Control type="text" placeholder="Enter Mobile" value={studentsMobile} readOnly/>
   </Form.Group>

   <Form.Group className="mb-3">
     <Form.Label>City</Form.Label>
     <Form.Control type="text" placeholder="Enter City Name" value={studentsCity} readOnly/>
   </Form.Group>

   <Form.Group className="mb-3">
     <Form.Label>Full Address</Form.Label>
     <Form.Control type="text" placeholder="Enter Address" value={studentsFullAddress} readOnly/>
   </Form.Group>

   <Form.Group className="mb-3">
        <Form.Label>Pincode</Form.Label>
        <Form.Control type="text" placeholder="Enter Pincode" value={studentsPincode} readOnly/>
      </Form.Group>

   <Form.Group className="mb-3">
     <Form.Label>Batch</Form.Label>
     <Form.Control type="text" placeholder="Enter Batch" value={studentsBatch} readOnly/>
   </Form.Group>

   <Form.Group className="mb-3">
     <Form.Label>Image URL</Form.Label>
     <Form.Control type="text" placeholder="Enter Image URL" value={studentsPic} readOnly/>
   </Form.Group>
  
 </Form>

 </div>

 </>
  }

  function mentorsProfile() {
    return<>
    <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-2">
    <h1 className="h1 mb-0 text-gray-800">Mentor Profile Section</h1>
    <i className="fa-solid fa-user-pen" style={{color: "#4e73df",fontSize:"2.5rem"}} onClick={()=>{navigate(`/edit-profile/${params.id}`)}}></i>
 </div>
    
    <div style={{display:"flex", flexDirection:"row-reverse", justifyContent:"center", alignItems:"center"}}>

 <img src={mentorsPic} style={{height:"425px", width:"350px", marginLeft:"50px"}} alt='dp'></img>

 <Form style={{width:"60%"}}>
 <Form.Group className="mb-3">
     <Form.Label>Mentor Name</Form.Label>
     <Form.Control type="text" placeholder="Enter Name" value={mentorsName} readOnly/>
   </Form.Group>

   <Form.Group className="mb-3">
     <Form.Label>Email address</Form.Label>
     <Form.Control type="email" placeholder="Enter Email" value={mentorsEmail} readOnly/>
   </Form.Group>

   <Form.Group className="mb-3">
     <Form.Label>Mobile Number</Form.Label>
     <Form.Control type="text" placeholder="Enter Mobile" value={mentorsMobile} readOnly/>
   </Form.Group>

   <Form.Group className="mb-3">
     <Form.Label>City Name</Form.Label>
     <Form.Control type="text" placeholder="Enter City Name" value={mentorsCity} readOnly/>
   </Form.Group>

   <Form.Group className="mb-3">
     <Form.Label>Full Address</Form.Label>
     <Form.Control type="text" placeholder="Enter Address" value={mentorsFullAddress} readOnly/>
   </Form.Group>

   <Form.Group className="mb-3">
        <Form.Label>Pincode</Form.Label>
        <Form.Control type="text" placeholder="Enter Pincode" value={mentorsPincode} readOnly/>
      </Form.Group>

      <Form.Group className="mb-3">
     <Form.Label>Assigned Student</Form.Label>
     <Form.Control type="text" placeholder="Enter Name" value={studentsName} readOnly/>
   </Form.Group>

      <Form.Group className="mb-3">
     <Form.Label>Image URL</Form.Label>
     <Form.Control type="text" placeholder="Enter Image URL" value={mentorsPic} readOnly/>
   </Form.Group>
  
 </Form>

 </div>

 </>
  }

  return <div className='container'>
          
          {flag?mentorsProfile():studentsProfile()}
  
          </div>
}

export default Profile