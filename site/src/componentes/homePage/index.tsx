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
            <div className="Introdution">
                <p>
                    Dev front-end <br/>
                    Ux Design

                </p>
                <button>
                    Baixar curriculo
                </button>
            </div>
        </div>    
        </>
    );
}

export default HomePage;