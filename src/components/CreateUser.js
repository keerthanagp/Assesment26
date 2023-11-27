import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { useFormik } from 'formik';
import axios from 'axios';

function CreateUser({flag,setFlag}) {
  let navigate = useNavigate()

  const handleChange = (event) => {
    setFlag(JSON.parse(event.target.value));
  };

  let handleSaveStudents = async (data)=>{
    try {
      let res = await axios.post(`${'https://649f374c245f077f3e9d6f05.mockapi.io/students'}`,data)
      if(res.status===201)
      navigate('/dashboard')
    } catch (error) {
      console.log(error)
    }
  
  }

  let formikStudents = useFormik({
    initialValues:{
      studentsName:"",
      studentsEmail:"",
      studentsMobile:"",
      studentsCity:"",
      studentsBatch:""
    },
   validationSchema:Yup.object({
    studentsName: Yup.string().required("Required").min(2,"Minimum 2 Characters Required"),
    studentsEmail:Yup.string().required("Required").email("Enter a valid email"),
    studentsMobile:Yup.string().required("Required").matches(/^\d{10}$/,"Enter Valid Mobile"),
    studentsCity:Yup.string().required("Required"),
    studentsBatch:Yup.string().required("Required")
   }),
   onSubmit: (values)=>{
    handleSaveStudents(values)
   }
  })

  function createStudent() {
    return <>
    <Form onSubmit={formikStudents.handleSubmit}>
    <Form.Group className="mb-3">
        <Form.Label>Student Name</Form.Label>
        <Form.Control type="text" 
        placeholder="Enter Student Name" 
        id='studentsName'
        name='studentsName'
        onChange={formikStudents.handleChange}
        onBlur={formikStudents.handleBlur}
        value={formikStudents.values.studentsName}/>
        {formikStudents.touched.studentsName && formikStudents.errors.studentsName?<div style={{color:"red"}}>*{formikStudents.errors.studentsName}</div>:<></>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" 
        placeholder="Enter Email" 
        id='studentsEmail'
        name='studentsEmail'
        onChange={formikStudents.handleChange}
        onBlur={formikStudents.handleBlur}
        value={formikStudents.values.studentsEmail}/>
        {formikStudents.touched.studentsEmail && formikStudents.errors.studentsEmail?<div style={{color:"red"}}>*{formikStudents.errors.studentsEmail}</div>:<></>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control
        type="text" 
        placeholder="Enter Mobile" 
        id='studentsMobile'
        name='studentsMobile'
        onChange={formikStudents.handleChange}
        onBlur={formikStudents.handleBlur}
        value={formikStudents.values.studentsMobile}/>
        {formikStudents.touched.studentsMobile && formikStudents.errors.studentsMobile?<div style={{color:"red"}}>*{formikStudents.errors.studentsMobile}</div>:<></>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>City Name</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter City Name" 
        id='studentsCity'
        name='studentsCity'
        onChange={formikStudents.handleChange}
        onBlur={formikStudents.handleBlur}
        value={formikStudents.values.studentsCity}/>
        {formikStudents.touched.studentsCity && formikStudents.errors.studentsCity?<div style={{color:"red"}}>*{formikStudents.errors.studentsCity}</div>:<></>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Batch</Form.Label>
        <Form.Control  type="text" 
        placeholder="Enter Batch" 
        id='studentsBatch'
        name='studentsBatch'
        onChange={formikStudents.handleChange}
        onBlur={formikStudents.handleBlur}
        value={formikStudents.values.studentsBatch}/>
        {formikStudents.touched.studentsBatch && formikStudents.errors.studentsBatch?<div style={{color:"red"}}>*{formikStudents.errors.studentsBatch}</div>:<></>}
      </Form.Group>
     
      <Button variant="primary" type='submit'>
        Submit
      </Button>
    </Form>
    </>
  }

  let handleSaveMentors = async (data)=>{
    try {
      let res = await axios.post(`${'https://649f374c245f077f3e9d6f05.mockapi.io/mentors'}`,data)
      if(res.status===201)
      navigate('/dashboard')
    } catch (error) {
      console.log(error)
    }
  
  }

  let formikMentors = useFormik({
    initialValues:{
      mentorsName:"",
      mentorsEmail:"",
      mentorsMobile:"",
      mentorsCity:""
    },
   validationSchema:Yup.object({
    mentorsName: Yup.string().required("Required").min(2,"Minimum 2 Characters Required"),
    mentorsEmail:Yup.string().required("Required").email("Enter a valid email"),
    mentorsMobile:Yup.string().required("Required").matches(/^\d{10}$/,"Enter Valid Mobile"),
    mentorsCity:Yup.string().required("Required")
   }),
   onSubmit: (values)=>{
    handleSaveMentors(values)
    console.log("values")
   }
  })

  function createMentor() {
    return <>
    <Form onSubmit={formikMentors.handleSubmit}>
    <Form.Group className="mb-3">
    <Form.Label>Mentor Name</Form.Label>
    <Form.Control type="text" 
    placeholder="Enter Mentor Name" 
    id='mentorsName'
    name='mentorsName'
    onChange={formikMentors.handleChange}
    onBlur={formikMentors.handleBlur}
    value={formikMentors.values.mentorsName}/>
    {formikMentors.touched.mentorsName && formikMentors.errors.mentorsName?<div style={{color:"red"}}>*{formikMentors.errors.mentorsName}</div>:<></>}
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Email Address</Form.Label>
    <Form.Control type="email" 
    placeholder="Enter Email" 
    id='mentorsEmail'
    name='mentorsEmail'
    onChange={formikMentors.handleChange}
    onBlur={formikMentors.handleBlur}
    value={formikMentors.values.mentorsEmail}/>
    {formikMentors.touched.mentorsEmail && formikMentors.errors.mentorsEmail?<div style={{color:"red"}}>*{formikMentors.errors.mentorsEmail}</div>:<></>}
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Mobile Number</Form.Label>
    <Form.Control
    type="text" 
    placeholder="Enter Mobile" 
    id='mentorsMobile'
    name='mentorsMobile'
    onChange={formikMentors.handleChange}
    onBlur={formikMentors.handleBlur}
    value={formikMentors.values.mentorsMobile}/>
    {formikMentors.touched.mentorsMobile && formikMentors.errors.mentorsMobile?<div style={{color:"red"}}>*{formikMentors.errors.mentorsMobile}</div>:<></>}
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>City Name</Form.Label>
    <Form.Control 
    type="text" 
    placeholder="Enter City Name" 
    id='mentorsCity'
    name='mentorsCity'
    onChange={formikMentors.handleChange}
    onBlur={formikMentors.handleBlur}
    value={formikMentors.values.mentorsCity}/>
    {formikMentors.touched.mentorsCity && formikMentors.errors.mentorsCity?<div style={{color:"red"}}>*{formikMentors.errors.mentorsCity}</div>:<></>}
  </Form.Group>

  <Button variant="primary" type="submit">
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