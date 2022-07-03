
interface props{
    nome: string
    icon: string
    css: string
}

export function SkillsIcon(props: props) {
    
    return(
        <div className={props.css}>
            <img src={props.icon} alt={props.nome} className="w-full h-full"/>
            <h4 className="text-center text-2xl font-Montserrat">{props.nome}</h4>
        </div>
    )
}