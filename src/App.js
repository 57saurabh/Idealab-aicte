
import './App.css';
import MainRoutes from './Components/Routes/MainRoutes';
import HomePage from './Components/pages/Homepage/HomePage';
import NavBar from './Components/pages/Navbar/NavBar';
import { BrowserRouter} from 'react-router-dom';
import UserContextProvider from './Context/UserContextProvider'

function App() {
  return (
    
    <UserContextProvider>
   <MainRoutes/>
    </UserContextProvider>
  
    );
}

export default App;
