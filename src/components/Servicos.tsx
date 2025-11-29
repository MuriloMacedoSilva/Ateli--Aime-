import type { Cards } from "../types/servicosType"
import card1 from "../assets/card1.jpg"
import card2 from "../assets/card2.jpg"
import card3 from "../assets/card3.jpg"
import card4 from "../assets/card4.jpg"
import card5 from "../assets/card5.jpg"
import card6 from "../assets/card6.jpg"
import { Link } from "react-router"

export default function Servicos() {

    const cards: Cards = [
        {
            image: card1,
            id: 1,
            titulo: "Costura Sob Medida",
            texto: "Criação de peças exclusivas desenvolvidas especialmente para você, com caimento perfeito.",
            firstTopico: "Roupas personalizadas",
            secondTopico: "Medidas exatas",
            thirdTopico: "Escolha de tecidos"
        },
        {
            image: card2,
            id: 2,
            titulo: "Ajustes e Consertos",
            texto: "Ajustamos suas roupas favoritas para que fiquem perfeitas no seu corpo.",
            firstTopico: "Barras e bainhas",
            secondTopico: "Ajuste de cintura",
            thirdTopico: "Conserto de zíperes"
        },
        {
            image: card3,
            id: 3,
            titulo: "Customização",
            texto: "Dê nova vida às suas roupas com customização criativa  e eclusiva",
            firstTopico: "Aplicações e bordados",
            secondTopico: "Transformação de peças",
            thirdTopico: "Detalhes personalizados"
        },
        {
            image: card4,
            id: 4,
            titulo: "Roupas para Eventos",
            texto: "Vestidos e trajes especiais para casamentos, formaturas e festas.",
            firstTopico: "Vestidos de festa",
            secondTopico: "Trajes de cerimônia",
            thirdTopico: "Looks exclusivos"
        },
        {
            image: card5,
            id: 5,
            titulo: "Consultoria de Estilo",
            texto: "Orientação sobre tecidos, modelos e cores ideais para você",
            firstTopico: "Análise de estilo",
            secondTopico: "Sugestão de modelos",
            thirdTopico: "Escolha de tecidos"
        },
        {
            image: card6,
            id: 6,
            titulo: "Uniformes",
            texto: "Confexão de uniformes profissionais e escolares sob medida",
            firstTopico: "Uniformes corporativos",
            secondTopico: "Uniformes escolares",
            thirdTopico: "Personalizações"
        }
    ]




    return (
        <div className="bg-orange-50 flex flex-col gap-7 w-screen px-3 pt-9 pb-2 items-center">
            <div className="bg-pink-200 rounded-3xl flex items-center justify-center py-3 px-4">
                <h2 className="text-pink-600 text-[16px]">Nossos Serviços</h2>
            </div>
            <p className="text-black text-[16px] max-w-[500px]">Soluções completas em costura para você</p>
            <p className="text-gray-600 text-[16px] max-w-[650px] text-center">Oferecemos uma ampla gama de serviços de costura com qualidade profissional e atendimento personalizado.</p>
            <div className="w-[90%] grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5 p-1">
                {
                    cards.map((CardItem) => (
                        <div key={CardItem.id} className="rounded-3xl overflow-hidden hover:shadow-lg transition duration-100 border border-pink-200 flex flex-col w-auto">
                            <img src={CardItem.image} alt="imagens servicos" className="w-full h-[230px]" />
                            <div className="bg-white transition duration-200 rounded-3xl  gap-6 p-4 flex flex-col h-full">
                                <h2 className="text-black w-full text-[17px]">{CardItem.titulo}</h2>
                                <p className="text-gray-800 text-[16px] w-full flex justify-center items-center h-[60px]">{CardItem.texto}</p>
                                <ul className="text-gray-800 text-[14px]">
                                    <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-pink-600"></div>{CardItem.firstTopico}</li>
                                    <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-pink-600"></div>{CardItem.secondTopico}</li>
                                    <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-pink-600"></div>{CardItem.thirdTopico}</li>
                                </ul>
                                <Link to="" className="text-black hover:text-white rounded-md bottom-2 text-[14px] flex items-center justify-center border border-pink-600 py-2.5 px-3 hover:bg-pink-500 transition duration-300">Saiba Mais</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}