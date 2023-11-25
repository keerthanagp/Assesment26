import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate, useParams} from 'react-router-dom';

function AssignMentor() {

    let navigate = useNavigate()
    const params = useParams()
    console.log(params)

    // let [studentsName,setStudentsName] = useState()

    let [students,setStudents] = useState([])
    let [mentors,setMentors] = useState([])

    const [selectedValueStud, setSelectedValueStud] = useState();
    const [selectedValueMent, setSelectedValueMent] = useState();

    useEffect(()=>{
// for (const x of mentors) {
//   if (x.id===params.id)
//   {
//     setSelectedValueMent(x.mentorsName)
//   }
// }
setSelectedValueMent(params.id)
    },[params])

  let handleSave = async ()=>{
    try {
      let data = {}
      for (const x of mentors) {
        if(x.id === selectedValueMent)
        {
          data=x
        }
      }
      let res = await axios.put(`${'https://649f374c245f077f3e9d6f05.mockapi.io/mentors'}/${selectedValueMent}`,{
        studentsName:[selectedValueStud,...data?.studentsName]
      })
      if(res.status===200)
      navigate('/dashboard')
    } catch (error) {
      console.log(error)
    }
  
  }

    let getStudents = async ()=> {
        try {
          let res = await axios.get(`${'https://649f374c245f077f3e9d6f05.mockapi.io/students'}`)
          setStudents(res.data)
      
        } catch (error) {
          console.log(error)
        }
      }
      
      let getMentors = async ()=> {
        try {
          let res = await axios.get(`${'https://649f374c245f077f3e9d6f05.mockapi.io/mentors'}`)
          setMentors(res.data)
      
        } catch (error) {
          console.log(error)
        }
      }

    useEffect (()=>{
        getStudents()
        getMentors()
      
      },[])

  return <>
  <div className='container-fluid'> 
        <div className="d-sm-flex align-items-center justify-content-center mb-4 mt-2">
            <h1 className="h1 mb-0 text-gray-800">Assign Mentor to Students</h1>
        </div>

        <h1>Mentors List</h1>
        <Form.Select aria-label="Default select example" onChange={event => setSelectedValueMent(event.target.value)} value={selectedValueMent}>
      <option >Open this select menu</option>
      {
        mentors.map((e,i)=>{
            return <option value={e.id} key={i}>
              {e.mentorsName}
            </option>
          })
      }
    </Form.Select>
    
    <div className="d-sm-flex align-items-center justify-content-center mt-4">
            <h1 className="h1 mb-0 text-gray-800">To</h1>
        </div>
   
    <h1>Students List</h1>
        <Form.Select aria-label="Default select example" onChange={event => setSelectedValueStud(event.target.value)} Value={selectedValueStud}>
      <option >Open this select menu</option>
      {
        students.map((e,i)=>{
            return <option value={e.studentsName} key={i}>
              {e.studentsName}
            </option>
          })
      }
    </Form.Select>
    
    <div style={{marginTop: "15px", justifyContent:"center", display:"flex"}}>
    <Button variant="primary" style={{width: "80%", fontSize: "1.5rem"}} onClick={handleSave}>Assign Mentor</Button>{' '}
    </div>
</div>
  </>
}

export default AssignMentor