import React from 'react'
import "./customModal.css"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Custommodal =({id,showpopup,setshowpopup})=> {
    const navigate= useNavigate();
    const allusers = useSelector((state)=>state.app.users)
     const singleuser = allusers.filter((ele)=>ele.id === id)
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <button  onClick={() => setshowpopup(false)}>close</button>
            <h2>{singleuser[0].name}</h2>
            <h5>{singleuser[0].age}</h5>
            <h5>{singleuser[0].email}</h5>
            <h5>{singleuser[0].gender}</h5>
        </div>
      
    </div>
  )
}
export default Custommodal
