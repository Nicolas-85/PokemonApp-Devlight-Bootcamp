import {Routes, Route, BrowserRouter} from 'react-router-dom' 
import './App.css';
import Landing from "./pages/landing/Landing";


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {isLoggged? <List/> : <Landing/>}/>
        <Route path=''/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 