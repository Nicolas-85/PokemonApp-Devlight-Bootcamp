//Dependiencias
import {Routes, Route, BrowserRouter} from 'react-router-dom' 
//CSS
import './App.css';
//Components
import Landing from "./pages/landing/Landing";
import Login from './pages/Login/Login';
import List from './pages/List';
import NotFound from './pages/NotFound/NotFound';

function App() {
  const isLogged = window.localStorage.getItem('isLogged') === true //al igualar o comparar si 'isLogged' es true, 
                                                                    //convertimos la constante en un boolean
  return (
    <BrowserRouter>
      <Routes>
        {/* Estas son rutas condicionales ya que se le aplica las condicionales dentro.} */}
        <Route path='/' element= {isLogged? <List/> : <Landing/>}/>
        {isLogged? null : <Route path='/login' element={<Login/>}/>}
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 