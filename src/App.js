import './App.css';
import {Link , Outlet} from 'react-router-dom';
import Cds from './components/CDs';
import Books from './components/Books';

function App() {
  return (
    <div className="App">
      <h1>My CD's</h1>
      <nav style={{borderBottom: "solid 1px" , paddingBottom:"1rem"}}>
        <Link to="/components/Books">Books</Link>{" "}<Link to="/components/CDs">CD's</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
