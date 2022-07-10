import { ButtonIcon } from "./ButtonIcon"
import iconLinkedin from "../assets/icons/iconLinkedinPS.png"
// import iconGitPS from "../assets/icons/iconGitPS.png"
import protfiINM from "../assets/protfiINM.jpg"
let iconGitPS = "https://img.icons8.com/plasticine/120/000000/github-squared.png"

interface rede {
    icon: string
    alt: string
    
}

const redes=[
    {alt: "Linkedin", icon: iconLinkedin, link: "https://www.linkedin.com/in/gabriel-guilherme-santos-fernandes/"},
    // {alt: "GitHub", icon: iconGitPS,  link: "https://github.com/Gabriel-Fernandes1917"}
]


export function ShowMe() {
    
    return(
        <div className="w-full h-[90vh] bg-bgDark text-white pb-7">
            <div className="w-[60%] mx-auto h-full">
                <div className="flex w-full h-[80%] mx-auto">
                    <div className="mx-auto my-auto w-full">
                        <div className="w-[40rem] my-auto">

                            <h1 className="text-4xl font-Raleway font-extrabold newScreen:text-5x1">
                                Gabriel Fernandes
                            </h1>
                            <div className="mt-6">
                                <p className="text-xl text-grayText font-medium font-IBM">
                                    {/* Ola sou programador Web Front-end, sou apaixonado por empreendedorismo e inovações. */}
                                    {/* Sou programador Web Front-end jr */}
                                    Desenvolvedor junior front-end / Ux Design
                                </p>
                            </div>
                        </div>
                    </div>

                    <img src={protfiINM} alt="PictureMe" className="w-[50vh] h-[50vh] rounded-[50%] my-auto mx-auto"/>
                </div>
                {/* <div className="w-fit mx-auto">
                <p className="text-2xl">Deslise para baixo para ver mais</p>
                <img src="./src/assets/iconDown.png" alt="IconDown" className="mx-auto"/>
                </div> */}
                <h3 className="font-IBM text-xl">Minhas redes </h3>
                <div className="flex mt-2">

                   {redes.map((item, index) =>(
                     <ButtonIcon alt={item.alt} css={"w-20 h-20 mr-[50px] mb-[50xp] hover:scale-110 transition-all duration-500 "} img={item.icon} link={item.link}/>   
                   ))}

                </div>
            </div>
        </div>
    )
}