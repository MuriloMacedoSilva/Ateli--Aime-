import Logo from "../assets/logo-atelie-rosa.jpg"

export default function Header() {
    return (
        <header className=" w-full h-[70px] shadow-md flex items-center justify-center overflow-hidden bg-white fixed top-0 left-0 z-50">
            <div className="w-[110px] overflow-hidden flex items-center justify-center rounded-full absolute md:left-12 left-4">
                <img src={Logo} alt="logo" className="rounded-full" />
            </div>
            <nav className="hidden lg:block">
                <ul className="flex items-center justify-around gap-8 text-[16px]">
                    <li><a href="#Inicio" className="cursor cursor-pointer text-gray-600 hover:text-pink-600 transition transform duration-100">Início</a></li>
                    <li><a href="" className="cursor cursor-pointer text-gray-600 hover:text-pink-600 transition transform duration-100">Sobre</a></li>
                    <li><a href="" className="cursor cursor-pointer text-gray-600 hover:text-pink-600 transition transform duration-100">Serviços</a></li>
                    <li><a href="" className="cursor cursor-pointer text-gray-600 hover:text-pink-600 transition transform duration-100">Galeria</a></li>
                    <li><a href="" className="cursor cursor-pointer text-gray-600 hover:text-pink-600 transition transform duration-100">Contato</a></li>
                </ul>
            </nav>
            <a href="" className="p-2 px-4 text-[14px] bg-pink-600 text-white rounded-[10px] cursor-pointer hover:bg-pink-700 transform transition duration-100 absolute md:right-12 right-4 font-semibold">Agende sua consulta</a>
        </header>
    )
}