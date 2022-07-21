//Hooks
import { useState } from "react";

//componentes
import Header from "../../components/Header"
import Footer from './../../components/Footer';

//CSS
import "./LoginForm.css"


const LoginForm = ({onSucces})=>{//*1: esta es la prop que le declaramos en "Login" y va entre {} porque las props
                                 //se pasan como objetos.
   //Hooks
   const [email, setEmail] = useState("")
   const [pass, setPass] = useState("")
   const [error, setError] = useState("")

   //Funciones
   const handleEmailCahange = (event)=> {
      setEmail(event.target.value)
      // console.log(email)
   }
   const handlePassCahange = (event)=> {
      setPass(event.target.value)
      // console.log(pass)
   }
   const handleClickIngreso = ()=>{
      if(email === "test@test.com" && pass === "Usuario@123"){
         window.localStorage.setItem('isLogged', true)
         setError('')
         console.log('El botón funcionó')
         onSucces()
      } else {
         setError("Datos Incorrectos")
         window.localStorage.setItem('isLogged', false)
      }
   }
   return(
      <div>
         <div className="containerForm">
            <h3>Ingrese utilizando las siguientes credenciales:</h3>
            <div className="frame">
               <div className="containerP" >
                  <p>Email: test@test.com</p>
                  <p>Pass: Usuario@123</p>
               </div>
               <div className="containerFields">
                  <label htmlFor="Email">Email.</label>
                  <input type="email" id="email" onChange={handleEmailCahange}/>
                  <label htmlFor="Pass">Password.</label>
                  <input type="password" id="pass" onChange={handlePassCahange}/>
               </div>
               <div className="containerButton">
                  <button onClick={handleClickIngreso} type="submit">Ingresar</button>
               </div>
               <div>
                  {error.length > 0? (<div className="errorMessage">{error}</div>) : null}
               </div>
            </div>
         </div>
      </div>
   )
}

export default LoginForm