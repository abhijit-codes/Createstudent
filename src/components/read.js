import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ShowUser, deleteUser } from "../features/userdetailsSlice"; // ✅ Import deleteUser
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
            if (searchData.length === 0) {
              return ele;
            } else {
              return ele.name.toLowerCase().includes(searchData.toLowerCase());
            }
          })

          .map((ele) => (
            <div
              key={ele.id}
              className="border p-3 m-3 rounded shadow-sm w-50 mx-auto"
            >
              <h5 className="mb-2">{ele.name}</h5>
              <p className="mb-3">{ele.gender}</p>
              <p className="mb-3">{ele.email}</p>
              <div className="d-flex gap-2">
                <Button
                  variant="primary"
                  onClick={() => {
                    setId(ele.id);
                    setshowpopup(true);
                  }}
                >
                  View
                </Button>

                <Button
                  variant="warning"
                  onClick={() => navigate(`/edit/${ele.id}`)}
                >
                  Edit
                </Button>

                <Button
                  variant="danger"
                  onClick={() => dispatch(deleteUser(ele.id))}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Read;
