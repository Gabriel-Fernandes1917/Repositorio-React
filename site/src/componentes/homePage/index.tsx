import Botao from "../botao";
import '../../style/homePage.css'

function HomePage(){
    return(
        <>  
        <header>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Sobre mim</li>
                    <li>Logo</li>
                    <li>Projetos</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </header>
        <div className="field">
            <div>
                <p>
                    Creative UI Designer
                    Sourasith Phomhome
                    Based in Montreal
                </p>
                
            </div>
        </div>    
        </>
    );
}

export default HomePage;