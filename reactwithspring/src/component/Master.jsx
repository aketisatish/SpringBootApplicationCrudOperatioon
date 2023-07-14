import {Link,Routes,Route} from "react-router-dom"
import PostEx from "./PostEx.jsx";
import GetEx2 from "./GetEx2.jsx";
import PutEx from "./PutEx.jsx";
import DeleteEx from "./DeleteEx.jsx";
import Home  from "./Home.jsx";

const Master =()=>{
return(
    <>
    <Link to="/" style={{marginRight:100}}></Link>
    <Link to="/post" style={{marginRight:100}}>Registration</Link>
    <Link to="/get" style={{marginRight:100}}>GetDetails</Link>
    <Link to="/put" style={{marginRight:100}}>UpdateDetails</Link>
    <Link to="/delete" >Remove</Link>
    <br></br><br></br>

    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/post" element={<PostEx></PostEx>}></Route>
        <Route path="/get" element={<GetEx2></GetEx2>}></Route>
        <Route  path="/put" element={<PutEx></PutEx>}></Route>
        <Route path="/delete" element={<DeleteEx></DeleteEx>}></Route>
    </Routes>
    </>
)
}
export default Master;