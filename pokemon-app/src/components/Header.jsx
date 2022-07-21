import "../components/Header.css"
import LandingImg from "../pages/landing/Pokemon.png"

const Header = ()=>{
   
   return(
      <div className="containerHeader">
         <header className="header">
            <div className="containerImg">
               <img src= {LandingImg} alt="No se pudo cargar imagen"/>
            </div>
         </header>      
      </div>
   )
}

export default Header