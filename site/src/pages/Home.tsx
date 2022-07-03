import { AboutMe } from "../components/AboutMe";
import { Portifolio } from "../components/Portifolio";
import { ShowMe } from "../components/showMe";


export function Home() {
    
    return(
        <div className="w-full h-full">
            <ShowMe />
            <AboutMe />
            <Portifolio />
        </div>
    )
}