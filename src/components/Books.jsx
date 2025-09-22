import {Link} from "react-router-dom";
import { getBooks } from "../data/Data";

const Books=()=>{
    const books=getBooks();
    return(
    <div style={{display:"flex"}}>
        <nav style={{borderRight:"solid 1px", padding:"1rem"}}>
            <input type="text" placeholder="Search your book"/>
            {books.map((book)=>(
            <Link style={{display:"block"}} to={`/books/${book.number}`} key={book.number}>
                {book.name}
            </Link>
            ))}

        </nav>
    </div>
    )
}
export default Books;