import "../components/Header.css"
import LandingImg from "../pages/landing/Pokemon.png"

const Header = ()=>{
   
   return(
      <header className="containerHeader">
         <div className="containerImg">
            <img src= {LandingImg} alt="No se pudo cargar imagen"/>
         </div>
      </header>      
      
   )
}

export default Header