import {Link , Outlet} from "react-router-dom";
import { getBooks } from "../data/Data";

const Books=()=>{
    const books=getBooks();
    return(
    <div style={{display:"flex"}}>
        <nav style={{borderRight:"solid 1px", padding:"1rem"}}>
            <input type="text" placeholder="Search your book" id="searchInput"/>
            {books.map((book)=>(
            <Link style={{display:"block"}} to={`/books/${book.number}`} key={book.number}>
                {book.name}
            </Link>
            ))}
        </nav>
        <Outlet/>
    </div>
    )
}
export default Books;