import { SkillsIcon } from "./SkillsIcon"
import iconHTML from "../assets/icons/iconHTML.png"
import iconJS from "../assets/icons/iconJS.png"
import iconFigma from "../assets/icons/iconFigma.png"
import iconGit from "../assets/icons/iconGit.png"
import iconCSS from "../assets/icons/iconCSS.png"
import iconServidores from "../assets/icons/Servidores.png"
import iconPowerShell from "../assets/icons/iconPowerShell.png"
import iconPython from "../assets/icons/iconPython.png"
import iconUK from "../assets/icons/iconUK.svg"
import iconArduino from "../assets/icons/iconArduino.png"
import iconSQL from "../assets/icons/iconeSQL.png"


export function AboutMe() {
    

    const skills = [
        {nome: "HTML", icon: iconHTML},
        {nome: "JS", icon: iconJS},
        {nome: "Figma", icon: iconFigma},
        {nome: "GIT", icon: iconGit},
        {nome: "CSS", icon: iconCSS},
        {nome: "Servidores", icon: iconServidores},
        {nome: "Python", icon: iconPython}
    ]

    const learning =[
        {nome: "SQL", icon: iconSQL},
        {nome: "PowerShell", icon: iconPowerShell},
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
                    Sou um profissional de TI em constante evolução, atualmente atuando como Trainee em Análise de Dados. Tenho uma sólida experiência na área de suporte técnico, com foco em tratativas de incidentes e otimização de serviços. Meu objetivo é utilizar tecnologias como Python e automação para solucionar problemas de forma eficiente, impulsionar a inovação e gerar insights valiosos por meio da análise de dados. Estou sempre em busca de aprimorar minhas habilidades e desenvolver soluções que otimizem processos e agreguem valor aos negócios.
                    </p>
                </div>

                <div className="w-[60vw] mx-auto mt-48">
                    {/* habilidades */}
                    <h2 className="mx-auto font-Raleway font-extrabold text-4xl text-center">Habilidades</h2>
                    <h3 className="font-Raleway font-extrabold text-3xl mt-20">Conhecidas:</h3>
                    <div className="block w-full mt-6 desktop:flex desktop:flex-wrap justify-center gap-4">
                        {
                            skills.map((item)=>(
                                <SkillsIcon nome={item.nome} icon={item.icon} css={"w-[100px] h-[100px] mt-12 mx-auto text-center"}/>
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