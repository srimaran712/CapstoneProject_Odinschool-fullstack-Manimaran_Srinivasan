
import './App.css';
import AdminBoard from './AdminBoard';
import AuthLogin from './AuthLogin';
import {BrowserRouter,Routes,Route,Outlet,Navigate} from 'react-router-dom'
const ProtectedRoute=()=>{
  const token=localStorage.getItem('token')

  return token?<Outlet/>: <Navigate to='/login'/>
}
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute/>}>
          <Route path="/" element={<AdminBoard/>}/>
          </Route>
         
          <Route path="/login" element={<AuthLogin/>}/>
        </Routes>
     
      </BrowserRouter>
     
    </div>
  );
}

export default App;
