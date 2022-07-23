//Hooks
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
//Components
import LoginForm from "./LoginForm"
import Header from './../../components/Header';
import Footer from "../../components/Footer";
//CSS
import './Login.css'



const Login = ()=> {

   //Hooks
   const [isLogged, setIsLogged] = useState(window.localStorage.getItem('isLogged'))
   const navigate = useNavigate()


   const onSucces = ()=>{//esta función la pasamos como prop para que se vuelva a renderizar el componente
      setIsLogged(true)  //luego de cada ejecución de LoginForm a través de la modificación del estado.
      navigate('/list') //Al ponerle / adelante, la declaro como absoluta. Sino, sería reltiva.
   }
   return(
      <div className="main">
         <Header/>
         <LoginForm onSucces={onSucces}/> {/*Le declaramos una prop a este componente para que se vuelva a renderizar *1 */}
         <Footer/>
      </div>
   )
}

export default Login 