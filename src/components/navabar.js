import React, { useEffect, useState } from "react";
import { Navbar, Container, Button, Form, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchUser } from "../features/userdetailsSlice";

const Navabar = () => {
  const allusers = useSelector((state) => state.app.users);
  const dispatch = useDispatch();
  const [searchData, setsearchData] = useState("");

  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData, dispatch]); // ✅ FIX

  const navigate = useNavigate();

  return (
    <Navbar bg="light">
      <Container>
        <Button onClick={() => navigate("/")}>Add</Button>
        <Button onClick={() => navigate("/read")}>
          All ({allusers.length})
        </Button>

        <Form>
          <FormControl onChange={(e) => setsearchData(e.target.value)} />
        </Form>
      </Container>
    </Navbar>
  );
};

export default Navabar;