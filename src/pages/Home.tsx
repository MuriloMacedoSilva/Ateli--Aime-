import Header from "../components/Header"
import Inicio from "../components/Inicio"
import Servicos from "../components/Servicos"
import Sobre from "../components/Sobre"

export default function Home() {
    return (
        <div className="bg-gray-50 w-full overflow-hidden">
            <Header/>
            <Inicio/>
            <Sobre/>
            <Servicos/>
        </div>
    )
}

