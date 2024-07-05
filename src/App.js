import './App.css';
import { useState} from 'react';
import{BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import AdminState from './Context/AdminState'
import Login from './Components/Login'
import Alert from './Components/Alert'
import Users from './Components/Users'
import Moretokens from './Components/Moretokens';
import Access from './Components/Access';

function App() {
  const [alert, setAlert] = useState(null)
  const host=process.env.REACT_APP_AHOST

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type :type
    })
    setTimeout(() =>{
      setAlert(null)
    },3500)
  }
  return (
    <>
    <Router>
    <AdminState host={{host}}>
    <Navbar/>
    <Alert alert={alert}/>
    <Routes>
      <Route exact path="/" element={<Login prop={{host, showAlert}}/>}/>
      <Route exact path="/home" element={<Home prop={{showAlert}}/>}/>
      <Route exact path="/users" element={<Users prop={{host, showAlert}}/>}/>
      <Route exact path="/mtokens" element={<Moretokens/>}/>
      <Route exact path="/access" element={<Access/>}/>
    </Routes>
    </AdminState>
    </Router>
    </>
  );
}

export default App;
