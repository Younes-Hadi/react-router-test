import { useParams } from "react-router-dom";
import Books from "./Books";
const Book=()=>{
    return(
        <div>
        <p>Book with a name : {Books.name}</p>
        </div>
    )
}
export default Book;