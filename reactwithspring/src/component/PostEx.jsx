import {useRef,useState} from "react";
import axios from "axios";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const PostEx=()=>{
 
const [obj,setObj]=useState({});
const id=useRef(null);
const pname=useRef(null);
const email= useRef(null);
const password= useRef(null);
const mobileno= useRef(null);
  const my_func=()=>{
    const test_func=async()=>{
          const res= await axios.post(`http://localhost:2018/save`,{"id":id.current.value,"pname":pname.current.value,"email":email.current.value,"password":password.current.value,"mobileno":mobileno.current.value});
               const{data}=res;
               setObj(data);
               
        }
    test_func();
  }

   return(
<>
<fieldset>
    <legend>Post Request</legend>
Id:<input type="number" ref={id} placeholder="Enter A Id"></input><br></br><br></br>
PersonName:<input type="text" ref={pname} placeholder="Enter A PersonName"></input><br></br><br></br>
PersonEmail:<input type="email" ref={email} placeholder="Enter A Email "></input><br></br><br></br>
password:<input type="password" ref={password} placeholder="Enter A Password"></input><br></br><br></br>
MobileNo:<input type="number" ref={mobileno} placeholder="Enter A Mobile No"></input><br></br><br></br>
<button onClick={my_func} className="btn btn-primary">Register</button>
<h1>{JSON.stringify(obj)}</h1>
</fieldset>
</>

    )
}
export default PostEx;