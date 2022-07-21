//Componentes
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Login from "../Login/Login";

//Hooks
import { Navigate, useNavigate } from "react-router-dom";
//Hojas de estilo
import "./Landing.css"


const Landing = ()=>{
   const navigate = useNavigate()
   
   const handleClick = ()=>{
      navigate("/login")
   }
   return(
      <div className="main">
         <Header/>
         <div className="containerTexts">
            <h1>Creador: Alvarez, Nicolás Martín.</h1>
            <h2>Proyecto 2 - ReactJS Devlight Bootcamp.</h2>
            <p>Este es el segundo proyecto que realizamos durante el Bootcamp de la empresa Devlight. <br />
               Se trata de una app hecha en ReactJS, la cual consume información de la API de <a href="https://pokeapi.co">PokeApi</a>para mostrar un listado de pokemones y detalle de cada uno de ellos.
            </p>
            <p className="secondParagraph">Ingrese a la apliación a través del siguiente botón.
            </p>
            <div className="containerButton"> 
               <button onClick={handleClick}>Ingreso</button>
            </div>
         </div>
         <Footer/>
      </div>
      
   )
}

export default Landing