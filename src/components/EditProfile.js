import React, { useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditProfile({flag,setFlag}) {

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
  
      console.log(params.id)
      
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

  function studentsEditProfile() {

    let handleSave = async ()=>{
      try {
        let res = await axios.put(
          `${"https://649f374c245f077f3e9d6f05.mockapi.io/students"}/${
            params.id
          }`,
          {
            studentsPic,
            studentsName,
            studentsEmail,
            studentsMobile,
            studentsCity,
            studentsFullAddress,
            studentsPincode,
            studentsBatch
          }
        );
        if(res.status===200)  
        navigate('/dashboard')
      } catch (error) {
        console.log(error)
      }
    
    }

    return <>
    <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-2">
                <h1 className="h1 mb-0 text-gray-800">Edit Student Profile</h1>
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
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Enter City Name" value={studentsCity} onChange={(e)=>setStudentsCity(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
     <Form.Label>Full Address</Form.Label>
     <Form.Control type="text" placeholder="Enter Address" value={studentsFullAddress} onChange={(e)=>setStudentsFullAddress(e.target.value)}/>
   </Form.Group>

   <Form.Group className="mb-3">
        <Form.Label>Pincode</Form.Label>
        <Form.Control type="text" placeholder="Enter Pincode" value={studentsPincode} onChange={(e)=>setStudentsPincode(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Enter Batch" value={studentsBatch} onChange={(e)=>setStudentsBatch(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" placeholder="Enter Image URL" value={studentsPic} onChange={(e)=>setStudentsPic(e.target.value)}/>
      </Form.Group>
     
      <Button variant="primary" onClick={()=>handleSave()}>
        Submit
      </Button>
    </Form>
    </>
  }

  function mentorsEditProfile() {

    let handleSave = async ()=>{
      try {
        let res = await axios.put(
          `${"https://649f374c245f077f3e9d6f05.mockapi.io/mentors"}/${
            params.id
          }`,
          {
            mentorsPic,
            mentorsName,
            mentorsEmail,
            mentorsCity,
            mentorsFullAddress,
            mentorsPincode
          }
        );
        if(res.status===200)  
        navigate('/dashboard')
      } catch (error) {
        console.log(error)
      }
    
    }

    return <>
    <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-2">
                <h1 className="h1 mb-0 text-gray-800">Edit Mentor Profile</h1>
            </div>
    <Form>
    <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={mentorsName} onChange={(e)=>setMentorsName(e.target.value)}/>
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
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Enter City Name" value={mentorsCity} onChange={(e)=>setMentorsCity(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
     <Form.Label>Full Address</Form.Label>
     <Form.Control type="text" placeholder="Enter Address" value={mentorsFullAddress} onChange={(e)=>setMentorsFullAddress(e.target.value)}/>
   </Form.Group>

   <Form.Group className="mb-3">
        <Form.Label>Pincode</Form.Label>
        <Form.Control type="text" placeholder="Enter Pincode" value={mentorsPincode} onChange={(e)=>setMentorsPincode(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Edit Assigned Student</Form.Label>
        <Form.Control type="text" placeholder="Enter Student Name" value={studentsName} onChange={(e)=>setStudentsName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" placeholder="Enter Image URL" value={mentorsPic} onChange={(e)=>setMentorsPic(e.target.value)}/>
      </Form.Group>
     
      <Button variant="primary" onClick={()=>handleSave()}>
        Submit
      </Button>
    </Form>
    </>
  }

//1. Without dependency array useEffect(()=>{}) --> triggers every time when a state changes
//2. With Empty Dependency array useEffect(()=>{},[]) --> triggers only for the first time of component rendering
//3. With Dependency Array useEffect(()=>{},[name,email]) ->> triggers only when name or email changes

  return <div className='container'>
        {flag?mentorsEditProfile():studentsEditProfile()}
  </div>
}

export default EditProfile