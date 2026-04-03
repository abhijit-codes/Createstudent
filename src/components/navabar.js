import React, { useEffect, useState } from "react";
import { Navbar, Container, Button, Form, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchUser } from "../features/userdetailsSlice";

const Navabar = () => {
  const allusers = useSelector((state) => state.app.users);
  const dispatch =useDispatch();
  const [searchData, setsearchData] = useState("");
  useEffect(()=>{
    dispatch(searchUser(searchData));
  },[searchData]);




  
  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg">
      <Container className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-2">
          <Button variant="outline-primary">RTK</Button>
          <Button variant="outline-secondary" onClick={() => navigate("/")}>
            Add STUDENT
          </Button>
          <Button variant="outline-success" onClick={() => navigate("/read")}>
            ALL STUDENT({allusers.length})
          </Button>
        </div>

        <Navbar.Brand className="mx-auto">Class Name</Navbar.Brand>

        <Form className="d-flex ms-auto">
          <FormControl type="search" placeholder="Search" className="me-2" onChange={(e)=>(setsearchData(e.target.value))} />
        </Form>
      </Container>
    </Navbar>
  );
};

export default Navabar;
