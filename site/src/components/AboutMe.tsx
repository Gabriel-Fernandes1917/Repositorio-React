import { SkillsIcon } from "./SkillsIcon"
import iconHTML from "../assets/icons/iconHTML.png"
import iconJS from "../assets/icons/iconJS.png"
import iconFigma from "../assets/icons/iconFigma.png"
import iconGit from "../assets/icons/iconGit.png"
import iconCSS from "../assets/icons/iconCSS.png"
import iconTS from "../assets/icons/iconTS.png"
import iconTailwindcss from "../assets/icons/iconTailwindcss.png"
// import iconReact from "../assets/icons/iconReact.png"
import iconUK from "../assets/icons/iconUK.svg"
import iconArduino from "../assets/icons/iconArduino.png"
import iconmysql from "../assets/icons/iconmysql.png"
import iconAngula from "../assets/icons/iconAngula.png"

export function AboutMe() {
    

    const skills = [
        {nome: "HTML", icon: iconHTML},
        {nome: "JS", icon: iconJS},
        {nome: "Figma", icon: iconFigma},
        {nome: "GIT", icon: iconGit},
        {nome: "CSS", icon: iconCSS},
        {nome: "MySQL", icon: iconmysql}
    ]

    const learning =[
        {nome: "TS", icon: iconTS},
        {nome: "Tailwind", icon: iconTailwindcss},
        {nome: "Angula", icon: iconAngula}
    ]

    const otherSkills = [
        {nome: "Inglês", icon: iconUK},
        {nome: "Arduino", icon: iconArduino}
    ]


    return(
        <div className="bg-bgNoDark w-full h-fit pb-16">
            <div className="w-[80%] h-full pt-16 mx-auto">
                <div className="w-[90%] mx-auto ">
                    {/* text about me */}
                    <h2 className="mx-auto font-Raleway font-extrabold text-4xl text-center">Sobre mim</h2>
                    <p className="font-IBM text-xl text-justify tracking-tighter h-full pt-5">
                        Sou estudante de engenharia da computação. Gosto muito de inovações e empreendedorismo principalmente os voltados para a área de programação web. Atualmente foco meus estudos e projetos em TypeScript, linguagem a qual quero me profissionalizar. Estou sempre em busca de novos conhecimentos e desafios que possibilitem expandir e aprimorar minhas habilidades. Compartilhar aprendizados, solucionar problemas, falar em público e conhecimento diversificado são meus principais diferenciais.
                    </p>
                </div>

                <div className="w-[60vw] mx-auto mt-48">
                    {/* habilidades */}
                    <h2 className="mx-auto font-Raleway font-extrabold text-4xl text-center">Habilidades</h2>
                    <h3 className="font-Raleway font-extrabold text-3xl mt-20">Conhecidas:</h3>
                    <div className="block w-full mt-6 desktop:flex">
                        {
                            skills.map((item)=>(
                                <SkillsIcon nome={item.nome} icon={item.icon} css={"w-[100px] h-[100px] mt-12 mx-auto"}/>
                            ))
                        }
                    </div>
                    
                    <h3 className="font-Raleway font-extrabold text-3xl mt-20">Aprendendo:</h3>
                    <div className="block w-full mt-6 desktop:flex">
                        {
                            learning.map((item)=>(
                                <SkillsIcon nome={item.nome} icon={item.icon} css={"w-[100px] h-[100px] mt-12 mx-auto"}/>
                            ))
                        }
                    </div>

                    <h3 className="font-Raleway font-extrabold text-3xl mt-20">Outras:</h3>
                    <div className="block w-full mt-6 desktop:flex">
                        {
                            otherSkills.map((item)=>(
                                <SkillsIcon nome={item.nome} icon={item.icon} css={"w-[100px] h-[100px] mt-12 mx-auto"}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}