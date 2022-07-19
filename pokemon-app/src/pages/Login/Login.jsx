import { useState } from "react"
import LoginForm from "./LoginForm"

const Login = ()=> {
   const [isLogged, setIsLogged] = useState(window.localStorage.getItem('isLogged'))

   const onSucces = ()=>{//esta función la pasamos como prop para que se vuelva a renderizar el componente
      setIsLogged(true)  //luego de cada ejecución de LoginForm a través de la modificación del estado.
   }
   return(
      <LoginForm onSucces={onSucces}/> 
   )
}

export default Login 