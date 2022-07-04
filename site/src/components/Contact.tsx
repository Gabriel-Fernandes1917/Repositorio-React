import { ButtonIcon } from "./ButtonIcon";
import iconLinkedin from "../assets/icons/iconLinkedinPS.png"

export function Contact() {
    
    return(
        <div className="bg-bgDark w-full h-full text-white pb-24">
            <div className="w-[80%] h-full pt-16 mx-auto">
                <div className="w-[70rem] mx-auto ">
                    {/* text about me */}
                    <h2 className="mx-auto font-Raleway font-extrabold text-4xl text-center">Contato</h2>
                    <p className="font-IBM text-2xl h-full pt-5 text-center">
                        Vamos trocar uma ideia ? <br/> Segue abaixo meus contatos
                    </p>

                    <div className="">
                        <div className="text-4xl mt-11">Email: <span className="text-3xl mt-2 ml-9 ">gabgui2001@gmail.com</span></div>

                        <div className="text-4xl mt-11 text">LinkedIn: <ButtonIcon alt="LinkedIn" css="w-14 h-14  ml-8 hover:scale-110 transition-all duration-500" img={iconLinkedin} link="https://www.linkedin.com/in/gabriel-guilherme-santos-fernandes/"/></div>
                        
                    </div>


                </div>
            </div>
        </div>
    )
}