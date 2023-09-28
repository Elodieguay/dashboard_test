import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'
import Dashboard from './pages/dashboard/Dashboard';
import Houses from './pages/opportunities/Houses'
import { Provider } from 'react-redux';
import Store from './store/Store'


const App= () => {

  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="/houses" element={<Houses/>}/> 
          <Route path="/profile/:id" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>  
  );
}

export default App;
