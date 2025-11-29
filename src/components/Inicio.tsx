import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, A11y } from 'swiper/modules';
import aimee from "../assets/aimee.jpg"
import produto1 from "../assets/produto1.jpg"
import produto2 from "../assets/produto2.jpg"
import produto3 from "../assets/produto3.jpg"
import produto4 from "../assets/produto4.jpg"
import produto6 from "../assets/produto6.jpg"
import produto7 from "../assets/produto7.jpg"
import satisfeitos from "../assets/satisfeitos.png"
import quadro from "../assets/quadro.jpg"
import type { Slides } from '../types/slideType';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export default function Inicio() {

    const slides: Slides = [
        {
            id: 1,
            image: quadro
        },
        {
            id: 2,
            image: aimee
        },
        {
            id: 3,
            image: produto1
        },
        {
            id: 4,
            image: produto3
        },
        {
            id: 5,
            image: produto2
        },
        {
            id: 6,
            image: produto4
        },
        {
            id: 7,
            image: produto6
        },
        {
            id: 8,
            image: produto7
        },
    ] 

    slides

    return (
        <div id='Inicio' className="bg-pink-50 w-full flex flex-col lg:flex-row lg:pl-9 pb-15 mt-[70px] pl-2 justify-center gap-14 items-center">
            <div className=" flex flex-col gap-2 p-3 max-w-[600px] justify-start mb-8">
                <h1 className="text-pink-600 mb-3 text-[16px]">Transforme seus sonhos em realidade</h1>
                <p className="text-gray-600 text-[16px] font-normal">Crio peças únicas e especiais, com dedicação, qualidade e amor em cada detalhe. Do simples ajuste à peça sob medida dos seus sonhos.</p>
                <div className="flex gap-3 mt-5">
                    <button className="bg-pink-600 text-white p-2 px-4  cursor-pointer hover:bg-pink-700 transition duration-100 text-[15px] font-semibold rounded-md">Conheça Nossos Serviços</button>
                    <button className="border text-pink-600 text-[15px] cursor-pointer px-4 border-pink-600  p-2 hover:text-black transition duration-100 font-semibold rounded-md">Ver Galeria</button>
                </div>
            </div>
            <div className='max-w-[700px] max-h-[700px] flex shadow-2xl relative cursor-grab'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    direction="horizontal"
                    centeredSlides={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Navigation, Autoplay, A11y]}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    className='my-Swiper w-full h-full mx-auto shadow-2xl'
                >
                    <SwiperSlide className=' overflow-hidden flex justify-center m-auto items-center max-h-[700px] max-w-[700px]'><img src={quadro} alt="" className='w-full m-auto' /></SwiperSlide>
                    <SwiperSlide className=' overflow-hidden flex justify-center m-auto items-center max-h-[700px] max-w-[700px]'><img src={aimee} alt="aimee" className='w-full m-auto' /></SwiperSlide>
                    <SwiperSlide className=' overflow-hidden flex justify-center m-auto items-center max-h-[700px] max-w-[700px]'><img src={produto1} alt="produto1" className='w-full m-auto' /></SwiperSlide>
                    <SwiperSlide className=' overflow-hidden flex justify-center m-auto items-center max-h-[700px] max-w-[700px]'><img src={produto3} alt="" className='w-full m-auto' /></SwiperSlide>
                    <SwiperSlide className=' overflow-hidden flex justify-center m-auto items-center max-h-[700px] max-w-[700px]'><img src={produto2} alt="" className='w-full m-auto' /></SwiperSlide>
                    <SwiperSlide className=' overflow-hidden flex justify-center m-auto items-center max-h-[700px] max-w-[700px]'><img src={produto4} alt="" className='w-full m-auto' /></SwiperSlide>
                    <SwiperSlide className=' overflow-hidden flex justify-center m-auto items-center max-h-[700px] max-w-[700px]'><img src={produto6} alt="" className='w-full m-auto' /></SwiperSlide>
                </Swiper>
                <div className='w-[200px] md:w-[250px] absolute left-20 bottom-0  md:left-0 md:bottom-0  md:-ml-6 -mb-6 shadow-2xl z-2'><img src={satisfeitos} alt="" className='w-full rounded-[10px]' /></div>
            </div>
        </div>
    )
}