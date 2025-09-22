import { getCds } from "../data/CdData";
import { Link , Outlet } from "react-router-dom";

const Cds=()=>{
    const cds=getCds();
    return(
        <div style={{display:"flex"}}>
            <nav style={{direction:"rtl", padding:"1rem" ,borderLeft:"solid 2px", position:"absolute", right:0}}>
                <input type="text" placeholder="Search your CDs"/>
                {cds.map((cd)=>(
                    <Link style={{ display:"block"}} to={`/cds/${cds.number}`} key={cd.number}>{}
                    {cd.name}
                    </Link>
                ))}
            </nav>
            <Outlet/>
        </div>
    )
}

export default Cds;