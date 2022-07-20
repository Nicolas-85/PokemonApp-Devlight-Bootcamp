import {Routes, Route, BrowserRouter} from 'react-router-dom' 
import './App.css';
import Landing from "./pages/landing/Landing";

//Esto es una prueba para gitHub------------------------------------


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Landing/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
