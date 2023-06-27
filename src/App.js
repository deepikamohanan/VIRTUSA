import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import SearchUser from './users/SearchUser';
import TableUser from './users/TableUser'

function App() {

     
     return (
      <div className="SearchUser">
         <Router>
          <Navbar/>

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/adduser" element={<AddUser/>}/>
        <Route exact path="/edituser/:id" element={<EditUser/>}/>
        <Route exact path="/searchuser/:id" element={<SearchUser/>}/>
        <Route exact path="/tableuser/:id" element={<TableUser/>}/>


      
     </Routes>
     </Router>
         
   </div>
     );
}

export default App;
