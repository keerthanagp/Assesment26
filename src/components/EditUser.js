import React, { useState, useEffect,} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditUser({flag,setFlag}) {

  let params = useParams()

  let [studentsName,setStudentsName] = useState()
  let [studentsEmail,setStudentsEmail] = useState()
  let [studentsMobile,setStudentsMobile] = useState()
  let [studentsCity,setStudentsCity] = useState()
  let [studentsBatch,setStudentsBatch] = useState()
  let [mentorsName,setMentorsName] = useState()
  let [mentorsEmail,setMentorsEmail] = useState()
  let [mentorsMobile,setMentorsMobile] = useState()
  let [mentorsCity,setMentorsCity] = useState()
  
  let navigate = useNavigate()

  function studentsEdit() {

    let handleSave = async ()=>{
      try {
        let res = await axios.put(`${'https://649f374c245f077f3e9d6f05.mockapi.io/students'}/${params.id}`,{
          studentsName,
          studentsEmail,
          studentsMobile,
          studentsCity,
          studentsBatch
        })
        if(res.status===200)  
        navigate('/dashboard')
      } catch (error) {
        console.log(error)
      }
    
    }

    return <>
    <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-2">
    <h1 className="h3 mb-0 text-gray-800">Edit Student Details</h1>
</div>
    <Form>
    <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={studentsName} onChange={(e)=>setStudentsName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" value={studentsEmail} onChange={(e)=>setStudentsEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter Mobile" value={studentsMobile} onChange={(e)=>setStudentsMobile(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>City Name</Form.Label>
        <Form.Control type="text" placeholder="Enter City Name" value={studentsCity} onChange={(e)=>setStudentsCity(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Enter Batch" value={studentsBatch} onChange={(e)=>setStudentsBatch(e.target.value)}/>
      </Form.Group>
     
      <Button variant="primary" onClick={()=>handleSave()}>
        Submit
      </Button>
    </Form>
    </>
  }

  function mentorsEdit() {

    let handleSave = async ()=>{
      try {
        let res = await axios.put(`${'https://649f374c245f077f3e9d6f05.mockapi.io/mentors'}/${params.id}`,{
          mentorsName,
          mentorsEmail,
          mentorsMobile,
          mentorsCity
        })
        if(res.status===200)  
        navigate('/dashboard')
      } catch (error) {
        console.log(error)
      }
    
    }

    return <>
    <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-2">
    <h1 className="h3 mb-0 text-gray-800">Edit Mentor Details</h1>
</div>
    <Form>
    <Form.Group className="mb-3">
        <Form.Label>Mentor Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Mentor Name" value={mentorsName} onChange={(e)=>setMentorsName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" value={mentorsEmail} onChange={(e)=>setMentorsEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter Mobile" value={mentorsMobile} onChange={(e)=>setMentorsMobile(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>City Name</Form.Label>
        <Form.Control type="text" placeholder="Enter City Name" value={mentorsCity} onChange={(e)=>setMentorsCity(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Assign Student</Form.Label>
        <Form.Control type="text" placeholder="Enter Student Name" value={studentsName} onChange={(e)=>setStudentsName(e.target.value)}/>
      </Form.Group>
     
      <Button variant="primary" onClick={()=>handleSave()}>
        Submit
      </Button>
    </Form>
    </>
  }

  

let getStudents = async ()=> {
  try {
    let res = await axios.get(`${'https://649f374c245f077f3e9d6f05.mockapi.io/students'}/${params.id}`)
    
    if(res.status===200){
      setStudentsName(res.data.studentsName)
      setStudentsEmail(res.data.studentsEmail)
      setStudentsMobile(res.data.studentsMobile)
      setStudentsCity(res.data.studentsCity)
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
      setMentorsName(res.data.mentorsName)
      setMentorsEmail(res.data.mentorsEmail)
      setMentorsMobile(res.data.mentorsMobile)
      setMentorsCity(res.data.mentorsCity)
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

//1. Without dependency array useEffect(()=>{}) --> triggers every time when a state changes
//2. With Empty Dependency array useEffect(()=>{},[]) --> triggers only for the first time of component rendering
//3. With Dependency Array useEffect(()=>{},[name,email]) ->> triggers only when name or email changes

  return <div className='container'>
   {flag?mentorsEdit():studentsEdit()}
  </div>
}

export default EditUser