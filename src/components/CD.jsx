import { getCds, getCdsNumberForCalling } from "../data/CdData";
import { useParams } from "react-router-dom";

const CD=()=>{
    const cdparams=useParams();
    const cd=getCdsNumberForCalling(parseInt(cdparams.cdId))
    return(
        <div>
            <p>
                Name of the chosen CD is: {cd.name}
            </p>
        </div>
    )
}
export default CD;