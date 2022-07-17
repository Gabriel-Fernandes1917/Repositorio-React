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
            <div className="w-[70vw] h-full mx-auto">             
                        <div className="block h-[80%] desktop:flex">
                            <img src={protfiINM} alt="PictureMe" className="w-[70vh] my-auto max-h-80 desktop:max-w-xs rounded-[50%] pt-4"/>

                            <div className="mt-6 desktop:my-auto desktop:ml-5">
                                <h1 className="text-4xl mt-4 font-Raleway font-extrabold newScreen:text-5x1">
                                    Gabriel Fernandes
                                </h1>
                                <p className="text-x1 text-grayText font-medium font-IBM">
                                    {/* Ola sou programador Web Front-end, sou apaixonado por empreendedorismo e inovações. */}
                                    {/* Sou programador Web Front-end jr */}
                                    Desenvolvedor junior front-end / Ux Design
                                </p>
                            </div>
                        </div>           
                {/* <div className="w-fit mx-auto">
                <p className="text-2xl">Deslise para baixo para ver mais</p>
                <img src="./src/assets/iconDown.png" alt="IconDown" className="mx-auto"/>
                </div> */}
                <h3 className="font-IBM text-xl mt-4">Minhas redes </h3>
                <div className="flex mt-2">

                   {redes.map((item, index) =>(
                     <ButtonIcon alt={item.alt} css={"w-[8vh] h-[8vh] mr-[50px] mb-[50xp] hover:scale-110 transition-all duration-500"} img={item.icon} link={item.link}/>   
                   ))}

                </div>
            </div>
        </div>
    )
}