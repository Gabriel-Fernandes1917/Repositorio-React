import { ButtonIcon } from "./ButtonIcon"
import { Work } from "./Works"
import caloriametrimetro from "../assets/works/caloriametrimetro.png"
import igniteLab from "../assets/works/igniteLab.png"
import PowShellUserAD from "../assets/works/PowShellUserAD.png"
import Buscamon from "../assets/works/Buscamon.png"
import RotasInteligentes from "../assets/works/RotasInteligentes.png"
// import iconGitPS from "../assets/icons/iconGitPS.png"
let iconGitPS = "https://img.icons8.com/color/48/000000/github--v1.png"

export function Portifolio() {
    
    const works = [
        {nome: "caloria metrimetro",
        thumb: caloriametrimetro,
        text: "Site que calcula quanto tempo de exercicio você precisa para perder peso desejado",
        git: "https://github.com/Gabriel-Fernandes1917/calorimeter", 
        tag:["HTML", "CSS", "JS"],
        site:"https://gabriel-fernandes1917.github.io/calorimeter/indexPTBR.html",
        iconGit: iconGitPS},

        {nome: "Plataforma de Estudos",
        thumb: igniteLab,
        text: "Plataforma de ensino online",
        git: "https://github.com/Gabriel-Fernandes1917/IgniteLab",
        tag:["TS", "Tailwind", "React"],
        site: "https://ignitelab-seven.vercel.app/",
        iconGit: iconGitPS},

        {nome: "Script de criação de usuário no AD",
        thumb: PowShellUserAD,
        text: "Script para automatizar o processo de criação de usuários no Microsoft Active Directory (AD)",
        git: "https://github.com/Gabriel-Fernandes1917/PowShellUser",
        tag:["AD", "Python", "PowerShell"],
        site: "https://github.com/Gabriel-Fernandes1917/PowShellUser",
        iconGit: iconGitPS},

        {nome: "Buscamon",
        thumb: Buscamon,
        text: "Programa que tem como objetivo ajudar o usuário a encontrar o tipo do Pokemon que procura.",
        git: "https://github.com/Gabriel-Fernandes1917/BGC-Scraping",
        tag:["Node", "JS", "Web Scraping"],
        site: "https://github.com/Gabriel-Fernandes1917/BGC-Scraping",
        iconGit: iconGitPS},

        {nome: "Rotas Inteligentes",
        thumb: RotasInteligentes,
        text: "Projeto, no qual utilizando Python, API TomTom, ESP 32 e uma tela LCD desenvolvi junto a minha equipe um painel de trânsito, o qual informa o tempo da viagem aos motoristas da via.",
        git: "https://github.com/Gabriel-Fernandes1917/Rotas-Inteligentes",
        tag:["Python", "Flask", "TomTom", "C++"],
        site: "https://github.com/Gabriel-Fernandes1917/Rotas-Inteligentes",
        iconGit: iconGitPS}
    ]

    return(
        <div className="bg-bgNoDark w-full pb-[22vh]">
            <div className="w-[80vw] h-full pt-16 mx-auto">
                <div className="w-full mx-auto px-4">
                    {/* text about me */}
                    <h2 className="mx-auto font-Raleway font-extrabold text-4xl text-center">Projetos</h2>
                    <p className="font-IBM text-xl h-full pt-5 text-justify tracking-tighter desktop2:text-center">
                       Segue abaixo alguns projetos pessoais e acadêmicos que produzir durante meus estudos.
                    </p>


                    <div className="block justify-between mt-16 desktop:flex flex-wrap gap-2 desktop2:justify-evenly">
                        {works.map((item)=>(
                            <div className="desktop:max-w-xs">
                                {/* <img src={item.thumb} alt={item.nome} className="w-fit h-fit rounded-lg"/> */}
                                <Work site={item.site} css={"w-fit h-fit max-h-40 min-h-fit min-w-full rounded-lg cursor-pointer mt-4 hover:scale-110 hover:brightness-75 transition-all duration-500 sm:max-h-32"} thumb={item.thumb} nome={item.nome} />
                                <h3 className="font-Raleway text-2xl mt-4">{item.nome}</h3>
                                <p className="font-IBM text-xl mt-4 text-justify tracking-tighter">{item.text}</p>

                                <div className="w-full mt-3 flex">
                               
                                    {item.tag.map((item) =>(
                                        <div className="mx-2 border-solid border-black border-2 my-auto p-1 min-w-[70px] text-center rounded">
                                        <span className="cursor-default">
                                            {item}
                                        </span>
                                        </div>
                                    ))}
                                   
                                </div>
                                <ButtonIcon alt={item.nome} css={"mt-2 w-[60px] h-[60px] hover:scale-110 transition-all duration-500"} img={item.iconGit} link={item.git}/>
                            </div>
                        ))}
                    </div>
                </div>
            
            </div>
        </div>
    )
}