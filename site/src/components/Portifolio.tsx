import { ButtonIcon } from "./ButtonIcon"
import { Work } from "./Works"
import caloriametrimetro from "../assets/works/caloriametrimetro.png"
import igniteLab from "../assets/works/igniteLab.png"
// import iconGitPS from "../assets/icons/iconGitPS.png"
let iconGitPS = "https://img.icons8.com/color/48/000000/github--v1.png"

export function Portifolio() {
    
    const works = [
        {nome: "caloria metrimetro", thumb: caloriametrimetro , text: "Site que calcula quanto tempo de exercicio você precisa para perder peso desejado", git: "https://github.com/Gabriel-Fernandes1917/calorimeter", 
        tag:["HTML", "CSS", "JS"], site:"https://gabriel-fernandes1917.github.io/calorimeter/indexPTBR.html", iconGit: iconGitPS},
        {nome: "Plataforma de Estudos", thumb: igniteLab, text: "Plataforma de ensino online", git: "https://github.com/Gabriel-Fernandes1917/IgniteLab",  tag:["TS", "Tailwind", "React"], site: "https://ignitelab-seven.vercel.app/", iconGit: iconGitPS}
    ]

    return(
        <div className="bg-bgNoDark w-full h-screen  ">
            <div className="w-[80%] h-full pt-16 mx-auto">
                <div className="w-[70rem] mx-auto">
                    {/* text about me */}
                    <h2 className="mx-auto font-Raleway font-extrabold text-4xl text-center">Projetos</h2>
                    <p className="font-IBM text-2xl h-full pt-5 text-justify">
                       Segue abaixo alguns projetos pessoais e acadêmicos que produzir durante meus estudos.
                    </p>


                    <div className="flex justify-between mt-16">
                        {works.map((item)=>(
                            <div className="w-96 h-80">
                                {/* <img src={item.thumb} alt={item.nome} className="w-fit h-fit rounded-lg"/> */}
                                <Work site={item.site} css={"w-fit h-fit rounded-lg cursor-pointer hover:scale-110 hover:brightness-75 transition-all duration-500 "} thumb={item.thumb} nome={item.nome} />
                                <h3 className="font-Raleway text-2xl mt-4">{item.nome}</h3>
                                <p className="font-IBM text-xl mt-4 text-justify">{item.text}</p>

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