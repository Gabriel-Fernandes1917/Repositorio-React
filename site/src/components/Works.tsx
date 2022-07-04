
interface work{
    site: string
    css: string
    thumb: string
    nome: string
}

export function Work(props: work) {
    // w-fit h-fit rounded-lg

    const openInNewTab = (url: string | URL | undefined) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return(
        <a onClick={()=> openInNewTab(props.site)}>
            <img src={props.thumb} alt={props.nome} className={props.css}/>
        </a>

    )
}