import { useState } from "react"
import LoginForm from "./LoginForm"
import { useNavigate } from 'react-router-dom';

const Login = ()=> {

   //Hooks
   const [isLogged, setIsLogged] = useState(window.localStorage.getItem('isLogged'))
   const navigate = useNavigate()


   const onSucces = ()=>{//esta función la pasamos como prop para que se vuelva a renderizar el componente
      setIsLogged(true)  //luego de cada ejecución de LoginForm a través de la modificación del estado.
      navigate('list')
   }
   return(
      <LoginForm onSucces={onSucces}/> 
   )
}

export default Login 