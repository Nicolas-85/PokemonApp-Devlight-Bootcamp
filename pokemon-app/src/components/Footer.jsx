import "./Footer.css"

const Footer = ()=> {
   return(
      <div className="containerFooter">
         <footer className="footer">
            <div>
               <p> &copy; 2022</p>
            </div>
            <div className="containerRedes">
               <p>Redes:</p>
               <a href="https://www.linkedin.com/in/nicolasalvarez85">Linkedin</a>
               <a href="https://github.com/Nicolas-85">GitHub</a>
               <a href="https://vercel.com/nicolas-85">Portfolio</a>
            </div>
         </footer>
      </div>
   )
}

export default Footer