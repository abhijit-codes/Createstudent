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

  useEffect(() => {
    const selectedUser = users.find((user) => user.id === Number(id));
    if (selectedUser) setFormData(selectedUser);
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
    <Form className="mt-4 w-50 mx-auto my-5" onSubmit={handleSubmit}>
      <h2 className='text-center'>Edit Data</h2>

      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="age" value={formData.age} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />

      <Button type="submit">Update</Button>
    </Form>
  );
}