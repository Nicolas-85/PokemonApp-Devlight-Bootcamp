//Dependendcias
import { useState } from "react";

//componentes
import Header from "../../components/Header"
import Footer from './../../components/Footer';

//CSS
import "./LoginForm.css"


const LoginForm = ()=>{

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
         window.localStorage.setItem('isLogged', 'true')
         console.log('El botón funcionó')
      } else {
         console.log("error")
      }
   }
   return(
      <div>
         <Header/>
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
            </div>
         </div>
         <Footer/>         
      </div>
   )
}

export default LoginForm