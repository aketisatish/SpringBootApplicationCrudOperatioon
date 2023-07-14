import axios from "axios";
import { useState,useRef} from "react";

const DeleteEx=()=>{
    const [res,setRes]=useState(null);
       const id= useRef(null);
    const delete_fun=()=>{
   const test_fun=async()=>{
        const res=await axios.delete(`http://localhost:2018/delete/${id.current.value}`);
        const{status}=res;
        setRes(status);
   }
   test_fun();
    }
return(
    <>
    Id:<input type="number" ref={id} placeholder="Enter A Id"></input><br></br><br></br>
     <button onClick={delete_fun} className="btn btn-danger">Delete</button>
     <h1>{res}</h1>
    </>
)
}
export default DeleteEx;