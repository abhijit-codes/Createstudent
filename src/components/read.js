import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../features/userdetailsSlice";
import Custommodal from "./custommodal";
import { useNavigate } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [showpopup, setshowpopup] = useState(false);

  const { users, loading, searchData } = useSelector((state) => state.app);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2 className="text-center">All Data</h2>

      {showpopup && (
        <Custommodal
          id={id}
          showpopup={showpopup}
          setshowpopup={setshowpopup}
        />
      )}

      {users &&
        users
          .filter((ele) => {
            if (searchData.length === 0) return ele;
            return ele.name.toLowerCase().includes(searchData.toLowerCase());
          })
          .map((ele) => (
            <div key={ele.id} className="border p-3 m-3 rounded shadow-sm w-50 mx-auto">
              <h5>{ele.name}</h5>
              <p>{ele.gender}</p>
              <p>{ele.email}</p>

              <Button onClick={() => { setId(ele.id); setshowpopup(true); }}>
                View
              </Button>

              <Button variant="warning" onClick={() => navigate(`/edit/${ele.id}`)}>
                Edit
              </Button>

              <Button variant="danger" onClick={() => dispatch(deleteUser(ele.id))}>
                Delete
              </Button>
            </div>
          ))}
    </div>
  );
};

export default Read;