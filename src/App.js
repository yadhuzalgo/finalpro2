import './App.css';
import Movies from './components/Admin/Movies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Moviedetails from './components/Admin/Moviedetails';
import Movieedit from './components/Admin/Movieedit';
import Login from './components/Log/Login';
import Navbar from './components/Log/Navbar1';
import Xmain from './components/Userside/Xmain';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    
    <Routes>
      <Route path='/movies' element={<Movies method='post'/>}></Route>
      <Route path='/moviedetails' element={<Moviedetails method='get'/>}></Route>
      <Route path='/movieedit' element={<Movieedit method='post'/>}></Route>
      <Route path='/login' element={<Login method='post'/>}></Route>
      <Route path='/Main' element={<Xmain method='post'/>}></Route>
  
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
