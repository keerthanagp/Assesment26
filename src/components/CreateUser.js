import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateUser({flag,setFlag}) {

  // let [studentsPic,setStudentsPic] = useState("")
  let [studentsName,setStudentsName] = useState("")
  let [studentsEmail,setStudentsEmail] = useState("")
  let [studentsMobile,setStudentsMobile] = useState("")
  let [studentsCity,setStudentsCity] = useState("")
  let [studentsBatch,setStudentsBatch] = useState("")
  // let [mentorsPic,setMentorsPic] = useState("")
  let [mentorsName,setMentorsName] = useState("")
  let [mentorsEmail,setMentorsEmail] = useState("")
  let [mentorsMobile,setMentorsMobile] = useState("")
  let [mentorsCity,setMentorsCity] = useState("")

  let navigate = useNavigate()

  const handleChange = (event) => {
    setFlag(JSON.parse(event.target.value));
  };

  function createStudent() {

    let handleSave = async ()=>{
      try {
        let res = await axios.post(`${'https://649f374c245f077f3e9d6f05.mockapi.io/students'}`,{
            studentsName,
            studentsEmail,
            studentsMobile,
            studentsCity,
            studentsBatch
        })
        if(res.status===201)
        navigate('/dashboard')
      } catch (error) {
        console.log(error)
      }
    
    }

    return <>
    <Form>
    <Form.Group className="mb-3">
        <Form.Label>Student Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Student Name" onChange={(e)=>setStudentsName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" onChange={(e)=>setStudentsEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="text" placeholder="Enter Mobile Number" onChange={(e)=>setStudentsMobile(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>City Name</Form.Label>
        <Form.Control type="text" placeholder="Enter City Name" onChange={(e)=>setStudentsCity(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Enter Batch" onChange={(e)=>setStudentsBatch(e.target.value)}/>
      </Form.Group>
     
      <Button variant="primary" onClick={()=>handleSave()}>
        Submit
      </Button>
    </Form>
    </>
  }

  function createMentor() {

    let handleSave = async ()=>{
      try {
        let res = await axios.post(`${'https://649f374c245f077f3e9d6f05.mockapi.io/mentors'}`,{
            mentorsName,
            mentorsEmail,
            mentorsMobile,
            mentorsCity
        })
        if(res.status===201)
        navigate('/dashboard')
      } catch (error) {
        console.log(error)
      }
    }

    return <>
    <Form>
    <Form.Group className="mb-3">
        <Form.Label>Mentor Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Mentor Name" onChange={(e)=>setMentorsName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" onChange={(e)=>setMentorsEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="text" placeholder="Enter Mobile Number" onChange={(e)=>setMentorsMobile(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>City Name</Form.Label>
        <Form.Control type="text" placeholder="Enter City Name" onChange={(e)=>setMentorsCity(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" onClick={()=>handleSave()}>
        Submit
      </Button>
    </Form>
    </>
  }

  return <div className='container'>
     <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h1 mb-0 text-gray-800">Create</h1>

                <Form.Select size="lg" style={{width: "88%", marginTop: "15px"}}  value={flag} onChange={handleChange}>
                <option value="false">Students</option>
                  <option value="true">Mentors</option>
                </Form.Select>

            </div>
    
            {flag?createMentor():createStudent()}

  </div>
}

export default CreateUser