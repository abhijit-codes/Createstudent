// src/components/CreateStudent.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userdetailsSlice';
import { useNavigate } from 'react-router-dom';

const CreateStudent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user,setUser] = useState({});
    const getUserData= (e) => {
    setUser({...user , [e.target.name] : e.target.value})
    
    }

    const handlSubmit = (e)=>{
        e.preventDefault();
        console.log("...user",user)
        dispatch(createUser(user))
        navigate("/read")
    }















  return (
    <Form className="mt-4 w-50 mx-auto my-5" onSubmit={handlSubmit}>
      <h2 className='text-center my-2'>fill the data</h2>

      
      <div className="mb-4">
        <label className="d-block mb-2">Gender</label>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="gender" id="all" value="all" onChange={getUserData} />
          <label className="form-check-label" htmlFor="all">All</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="gender" id="male" value="male" onChange={getUserData}  />
          <label className="form-check-label" htmlFor="male">Male</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="gender" id="female" value="female" onChange={getUserData} />
          <label className="form-check-label" htmlFor="female">Female</label>
        </div>
      </div>

      <div className="mb-3">
        <label>Name</label>
        <input type="text" className="form-control" placeholder="Enter name" name='name' onChange={getUserData}/>
      </div>

      <div className="mb-3">
        <label>Age</label>
        <input type="number" className="form-control" placeholder="Enter age"  name='age' onChange={getUserData}/>
      </div>

      <div className="mb-3">
        <label>Email</label>
        <input type="email" className="form-control" placeholder="Enter email" name='email' onChange={getUserData} />
      </div>

      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
};

export default CreateStudent;
