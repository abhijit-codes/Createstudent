import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../features/userdetailsSlice';

export default function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.app);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
  });

  // Get current user data by id
useEffect(() => {
 
  const selectedUser = users.find((user) => user.id === Number(id));
  if (selectedUser) {
    setFormData(selectedUser);
  }
}, [id, users]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id, ...formData }));
    navigate("/read");
  };

  return (
    <div>
      <Form className="mt-4 w-50 mx-auto my-5" onSubmit={handleSubmit}>
        <h2 className='text-center my-2'>Edit the Data</h2>

        <div className="mb-4">
          <label className="d-block mb-2">Gender</label>
          {['all', 'male', 'female'].map((g) => (
            <div className="form-check form-check-inline" key={g}>
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id={g}
                value={g}
                checked={formData.gender === g}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor={g}>
                {g.charAt(0).toUpperCase() + g.slice(1)}
              </label>
            </div>
          ))}
        </div>

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Age</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}
