import React,{useContext, useEffect, useState} from 'react'
import Card from "./Card";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { useNavigate} from 'react-router-dom';
import { DashboardContext } from './context/DashboardContextComponent';
import axios from 'axios';

function Dashboard({flag,setFlag}) {

  let dashboard = useContext(DashboardContext)
  let navigate = useNavigate()

  let [students,setStudents] = useState([])
  let [mentors,setMentors] = useState([])

  let [unassignStud,setUnassignStud] = useState([])
  let [unassignStudId,setUnassignStudId] = useState()

  const handleChange = (event) => {
    setFlag(JSON.parse(event.target.value));
  };



function studentsFunc() {

  let handleDelete = async (i)=> {
    try {
      let res = await axios.delete(`${'https://649f374c245f077f3e9d6f05.mockapi.io/students'}/${i}`)
      if(res.status===200){getStudents()}
    } catch (error) {
      console.log(error)
    }
  }

  return <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Students Name</th>
          <th>Students Email</th>
          <th>Students Mobile</th>
          <th>Students City</th>
          <th>Students Batch</th>
          <th style={{textAlign: "center"}}>Actions</th>
        </tr>
      </thead>
      <tbody>
      {
          students.map((e,i)=>{
          return <tr key={i}>
            <td>{e.id}</td>
            <td>{e.studentsName}</td>
            <td>{e.studentsEmail}</td>
            <td>{e.studentsMobile}</td>
            <td>{e.studentsCity}</td>
            <td>{e.studentsBatch}</td>
            <td style={{textAlign: "center", fontSize : "1.5rem"}}>

            <div>
                <span title='User Profile' style={{ cursor: "pointer", color: "#f6c23e" }}><i className="fa-solid fa-user" onClick={() => { navigate(`/profile/${e.id}`) }}></i></span>&nbsp;&nbsp;
                <span title='Edit User' style={{ cursor: "pointer", color: "#1cc88a" }}><i className="fa-solid fa-pen-to-square" onClick={() => { navigate(`/edit-user/${e.id}`) }}></i></span>&nbsp;&nbsp;
                <span title='Delete User' style={{ cursor: "pointer", color: "#e74a3b" }}><i className="fa-solid fa-trash" onClick={() => handleDelete(e.id)}></i></span>
            </div>

              </td>
          </tr>
        })
      }
      </tbody>
    </Table>
}

function mentorsFunc() {

  let handleDelete = async (i)=> {
    try {
      let res = await axios.delete(`${'https://649f374c245f077f3e9d6f05.mockapi.io/mentors'}/${i}`)
      if(res.status===200){getMentors()}
    } catch (error) {
      console.log(error)
    }
  }

  let handleSave = async ()=>{
    try {
      // console.log(unassignStud,unassignStudId)
      let data = {}
      for (const x of mentors) {
        if(x.id === unassignStudId)
        {
          data=x
        }
      }
      let res = await axios.put(`${'https://649f374c245f077f3e9d6f05.mockapi.io/mentors'}/${unassignStudId}`,{
        studentsName:[]
      })
      getMentors()
      
    } catch (error) {
      console.log(error)
    }
  
  }

  return <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Mentors Name</th>
          <th>Mentors Email</th>
          <th>Mentors Mobile</th>
          <th>Mentors City</th>
          <th style={{textAlign: "center"}}>Assigned Students</th>
          <th style={{textAlign: "center"}}>Actions</th>
        </tr>
      </thead>
      <tbody>
      {
          mentors.map((e,i)=>{
          return <tr key={i}>
            <td>{e.id}</td>
            <td>{e.mentorsName}</td>
            <td>{e.mentorsEmail}</td>
            <td>{e.mentorsMobile}</td>
            <td>{e.mentorsCity}</td>
            <td style={{display: "flex",justifyContent: "center",flexDirection:"column"}}>{e.studentsName.map((a)=>{
              return (
								<div
									className="form-check form-check-reverse"
									style={{
										display: "flex",
										justifyContent: "center",
										flexDirection: "row-reverse",
									}}
								>
									<div>
										<input
											className="form-check-input"
											type="checkbox"
											id="reverseCheck1"
											style={{ cursor: "pointer" }}

											onChange={(event) => {
                        setUnassignStud(event.target.value)
                        setUnassignStudId(e.id)
                        // console.log(unassignStud)
                      }}
											defaultValue={a}
										></input>
									</div>
									&nbsp;&nbsp;
									<div>
										<label className="form-check-label" htmlFor="reverseCheck1">
											{a}
										</label>
									</div>
								</div>
							);
                    
            })}</td>
            <td style={{textAlign: "center", fontSize : "1.5rem"}}>

            <div>
                <span title='Assign User' style={{cursor:"pointer",color: "#4e73df"}}><i className="fa-solid fa-user-plus" onClick={()=>{navigate(`/assign-mentor/${e.id}`)}}></i></span>&nbsp;&nbsp;
                <span title='Edit User' style={{cursor:"pointer",color: "#1cc88a"}}><i className="fa-solid fa-pen-to-square" onClick={()=>{navigate(`/edit-user/${e.id}`)}}></i></span>&nbsp;&nbsp;
                <span title='User Profile' style={{cursor:"pointer",color: "#f6c23e"}}><i className="fa-solid fa-user" onClick={()=>{navigate(`/profile/${e.id}`)}}></i></span>&nbsp;&nbsp;
                <span title='Delete User' style={{cursor:"pointer",color: "#e74a3b"}}><i className="fa-solid fa-trash" onClick={()=>handleDelete(e.id)}></i></span>&nbsp;&nbsp;
                <span title='Unassign User' style={{cursor:"pointer",color: "#36b9cc"}}><i className="fa-solid fa-user-minus" onClick={handleSave}></i></span>
            </div>

              </td>
          </tr>
        })
      }
      </tbody>
    </Table>
}

let getStudents = async ()=> {
  try {
    // fetch(`${'https://649f374c245f077f3e9d6f05.mockapi.io/students'}`)
    // .then(res=>res.json())
    // .then(data=>setStudents(data))

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
  <div className="container-fluid">

{/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-2">
                <h1 className="h1 mb-0 text-gray-800">Dashboard</h1>
            </div>

{/* <!-- Content Row --> */}
            <div className="row">
                {
                  dashboard.data.map((e,i)=>{
                    return <Card key={i}
                    title={e.title}
                    value={e.value}
                    color={e.color}
                    icon={e.icon}
                    isProgress={e.isProgress}
                    />
                  })
                }
            </div>
          </div>

          <div className='container-fluid'> 

          <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">List of</h1>

                <Form.Select size="lg" style={{width: "92%"}}  value={flag} onChange={handleChange}>
                <option value="false">Students</option>
                  <option value="true">Mentors</option>
                </Form.Select>

            </div>

                {flag?mentorsFunc():studentsFunc()}

          </div>
  </>
}

export default Dashboard