

interface icon{
    alt: string
    css: string
    img: string
    link: string
}

export function ButtonIcon(props:icon) {
    
    const openInNewTab = (url: string | URL | undefined) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const openInNewPage = function newPage() {
        window.open(props.link, '_blank', 'noopener,noreferrer');
    }

    // <button className="w-20 h-20">
    // <img src='./src/assets/iconGit.png' alt="" />
    // </button>

    return(
       
            <button className={props.css} onClick={()=> openInNewTab(props.link)}>
            <img src={props.img} alt={props.alt} />
            </button>
        
    )
}