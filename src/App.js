import './App.css';
import {Link , Outlet} from 'react-router-dom';
import Cds from './components/CDs';
import Books from './components/Books';

function App() {
  return (
    <div className="App">
      <h1>My CDs and books</h1>
      <nav style={{borderBottom: "solid 1px" , paddingBottom:"1rem"}}>
        <Link to="/Books">Books</Link>{" "}<Link to="/CDs">CDs</Link>{" "}<Link to="/">Home</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
