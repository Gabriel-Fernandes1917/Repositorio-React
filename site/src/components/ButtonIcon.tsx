
interface icon{
    alt: string
    css: string
    img: string
}

export function ButtonIcon(props:icon) {
    
    // <button className="w-20 h-20">
    // <img src='./src/assets/iconGit.png' alt="" />
    // </button>

    return(
        <button className={props.css}>
           <img src={props.img} alt={props.alt} />
        </button>
    )
}