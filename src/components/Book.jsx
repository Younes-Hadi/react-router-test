import { useParams } from "react-router-dom";
import { getBookForNumberCall, getBooks } from "../data/Data"; 

const Book=()=>{
    const params=useParams();
    const book=getBookForNumberCall(parseInt(params.bookId));
    return(
        <div>
            <p>Book with a name : {book.name}</p>
        </div>
    )
}
export default Book;