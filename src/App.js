
import './App.css';
import HomePage from './Components/pages/Homepage/HomePage';
import NavBar from './Components/pages/Navbar/NavBar';
import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
    <NavBar/>
    <HomePage/>
    </BrowserRouter>
  
    );
}

export default App;
