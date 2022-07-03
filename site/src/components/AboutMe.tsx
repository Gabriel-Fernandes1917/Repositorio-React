import { SkillsIcon } from "./SkillsIcon"

export function AboutMe() {
    

    const skills = [
        {nome: "HTML", icon: "./src/assets/icons/iconHTML.png"},
        {nome: "JS", icon: "./src/assets/icons/iconJS.png"},
        {nome: "Figma", icon: "./src/assets/icons/iconFigma.png"},
        {nome: "GIT", icon: "./src/assets/icons/iconGit.png"},
        {nome: "CSS", icon: "./src/assets/icons/iconCSS.png"}
    ]

    const learning =[
        {nome: "TS", icon: "./src/assets/icons/iconTS.png"},
        {nome: "Tailwind", icon: "./src/assets/icons/iconTailwindcss.png"},
        {nome: "React", icon: "./src/assets/icons/iconReact.png"}
    ]

    const otherSkills = [
        {nome: "Inglês", icon: "./src/assets/icons/iconUK.svg"},
        {nome: "Arduino", icon: "./src/assets/icons/iconArduino.png"}
    ]


    return(
        <div className="bg-bgNoDark w-full h-fit pb-16">
            <div className="w-[80%] h-full pt-16 mx-auto">
                <div className="w-[70rem] mx-auto ">
                    {/* text about me */}
                    <h2 className="mx-auto font-Raleway font-extrabold text-4xl text-center">Sobre mim</h2>
                    <p className="font-IBM text-2xl h-full pt-5 text-justify">
                        Sou estudante de engenharia da computação. Gosto muito de inovações e empreendedorismo principalmente os voltados para a área de programação web. Atualmente foco meus estudos e projetos em JavaScript, linguagem a qual quero me profissionalizar. Estou sempre em busca de novos conhecimentos e desafios que possibilitem expandir e aprimorar minhas habilidades. Compartilhar aprendizados, solucionar problemas, falar em público e conhecimento diversificado são meus principais diferenciais.
                    </p>
                </div>

                <div className="w-[60%] mx-auto mt-48">
                    {/* habilidades */}
                    <h2 className="mx-auto font-Raleway font-extrabold text-4xl text-center">Habilidades</h2>
                    <h3 className="font-Raleway font-extrabold text-3xl mt-20">Conhecidas:</h3>
                    <div className="flex w-full mt-6">
                        {
                            skills.map((item)=>(
                                <SkillsIcon nome={item.nome} icon={item.icon} css={"w-[100px] h-[100px] mr-12"}/>
                            ))
                        }
                    </div>
                    
                    <h3 className="font-Raleway font-extrabold text-3xl mt-20">Aprendendo:</h3>
                    <div className="flex w-full mt-6">
                        {
                            learning.map((item)=>(
                                <SkillsIcon nome={item.nome} icon={item.icon} css={"w-[100px] h-[100px] mr-12"}/>
                            ))
                        }
                    </div>

                    <h3 className="font-Raleway font-extrabold text-3xl mt-20">Outras:</h3>
                    <div className="flex w-full mt-6">
                        {
                            otherSkills.map((item)=>(
                                <SkillsIcon nome={item.nome} icon={item.icon} css={"w-[100px] h-[100px] mr-12"}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}