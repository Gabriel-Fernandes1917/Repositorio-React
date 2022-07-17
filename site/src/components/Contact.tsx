import { ButtonIcon } from "./ButtonIcon";
import iconLinkedin from "../assets/icons/iconLinkedinPS.png"

export function Contact() {
    
    return(
        <div className="bg-bgDark w-full h-full text-white pb-24">
            <div className="w-[80vw] h-full pt-16 mx-auto">
                <div className="mx-auto ">
                    {/* text about me */}
                    <h2 className="mx-auto font-Raleway font-extrabold text-4xl text-center">Contato</h2>
                    <p className="font-IBM text-2xl h-full pt-5 text-center">
                        Vamos trocar uma ideia ? <br/> Segue abaixo meus contatos
                    </p>

                    <div className="">
                        <div className="text-4xl mt-11">Email: <br/> <span className="text-xl mt-2 ml-3">gabgui2001@gmail.com</span></div>

                        <div className="text-4xl mt-11 text">LinkedIn: <br/> <ButtonIcon alt="LinkedIn" css="w-14 h-14 mt-4 ml-3 hover:scale-110 transition-all duration-500" img={iconLinkedin} link="https://www.linkedin.com/in/gabriel-guilherme-santos-fernandes/"/></div>
                        
                    </div>

                    <div className="mt-3 text-right">
                        <p>Todos os icones usados nesse site foram retirados do site <span>https://icons8.com.br</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}