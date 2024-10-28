import { ButtonIcon } from "./ButtonIcon"
import iconLinkedin from "../assets/icons/iconLinkedinPS.png"
import mouseDown from "../assets/icons/mouseDown.jpg"
import iconGitPS from "../assets/icons/IconGitPS.png"
import protfiINM from "../assets/IMG_7057.jpg"
//let iconGitPS = "https://img.icons8.com/plasticine/120/000000/github-squared.png"

interface rede {
    icon: string
    alt: string
    
}

const redes=[
    {alt: "Linkedin", icon: iconLinkedin, link: "https://www.linkedin.com/in/gabriel-guilherme-santos-fernandes/"},
    {alt: "GitHub", icon: iconGitPS,  link: "https://github.com/Gabriel-Fernandes1917"}
]


export function ShowMe() {
    
    return(
        <div className="w-full h-[90vh] bg-bgDark text-white pb-7">
            <div className="w-[70vw] h-full mx-auto">             
                        <div className="block h-[80%] w-fit mx-auto desktop:flex desktop:h-[70%]">
                            <img src={protfiINM} alt="PictureMe" className="w-auto my-auto mx-auto max-h-80 max-w-xs desktop:max-w-xs rounded-[50%] pt-4"/>

                            <div className="mt-6 desktop:my-auto desktop:ml-5 desktop2:ml-">
                                <h1 className="text-4xl mt-4 font-Raleway font-extrabold newScreen:text-5x1">
                                    Gabriel Fernandes
                                </h1>
                                <p className="text-x1 text-grayText font-medium font-IBM">
                                    {/* Ola sou programador Web Front-end, sou apaixonado por empreendedorismo e inovações. */}
                                    {/* Sou programador Web Front-end jr */}
                                    Desenvolvedor Python / Automação de serviços
                                </p>
                            </div>
                        </div>           
                {/* <div className="w-fit mx-auto">
                <p className="text-2xl">Deslise para baixo para ver mais</p>
                <img src="./src/assets/iconDown.png" alt="IconDown" className="mx-auto"/>
                </div> */}
                <h3 className="hidden font-IBM text-xl mt-4 desktop:flex">Minhas redes </h3>
                <div className="hidden mt-2 desktop:flex">

                   {redes.map((item, index) =>(
                     <ButtonIcon alt={item.alt} css={"w-[7vh] h-[7vh] mr-[50px] mb-[50xp] hover:scale-110 transition-all duration-500"} img={item.icon} link={item.link}/>   
                   ))}

                </div>
                <div className="w-full h-fit mt-4">
                    <h4 className="mx-auto text-lg text-center">Arraste para baixo para ver mais </h4>
                    <img src={mouseDown} className="w-10 h-10  mx-auto" alt="icon mouse Down" />
                </div>
            </div>
        </div>
    )
}