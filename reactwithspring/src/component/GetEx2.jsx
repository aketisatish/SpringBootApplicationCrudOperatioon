import { useState,useEffect } from "react";
import axios from "axios";

const GetEx2=()=>{
     
      const[obj,setObj]=useState([]);
     useEffect(()=>{
        const my_fun=async()=>{
         const res=await axios.get(`http://localhost:2018/getall`);
         //console.log(res);
        const {data:x}=res;
         
         setObj(x);
        }
        my_fun();
     },[])
    return(
        <>
       <table border={1} align="center" cellPadding={10} cellSpacing={10}>
          <thead >
             <tr>
                        <th>Id</th>
                        <th>personname</th>
                        <th>email</th>
                        <th>password</th>
                        <th>mobileno</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                       obj.map((element,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{element.id}</td>
                                    <td>{element.pname}</td>
                                    <td>{element.email}</td>
                                    <td>{element.password}</td>
                                    <td>{element.mobileno}</td>
                                </tr>
                            )
                        })
                       }

                    </tbody>
                    <tfoot></tfoot>
                    </table>
            
        
        </>
    )

}
export default GetEx2;