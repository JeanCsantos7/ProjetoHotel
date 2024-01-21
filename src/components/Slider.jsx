import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Salvador from '../assets/image/Salvador.jpg';
import RiodeJaneiro from '../assets/image/Rio de Janeiro.jpg';
import Fortaleza from '../assets/image/Fortaleza.jpg';
import Balneario from '../assets/image/Balneario Camboriu.avif';
import SaoPaulo from '../assets/image/SaoPaulo.jpg';
import style from '../style/Slider.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SliderPopulares() {
    const [sliderPerView, setSliderPerView] = useState(2);
    
    const data = [
        { id: 1, imagem: RiodeJaneiro, text: 'Rio de Janeiro', acomodacoes: '280 acomodações' },
        { id: 2, imagem: Salvador, text: 'Salvador', acomodacoes: '95 acomodações' },
        { id: 3, imagem: Fortaleza, text: 'Fortaleza', acomodacoes: '72 acomodações' },
        { id: 4, imagem: Balneario, text: 'Balneário Camboriú', acomodacoes: '195 acomodações' },
        { id: 5, imagem: SaoPaulo, text: 'Ubatuba(SP)', acomodacoes: '100 acomodações' }
    ];

    return (
        <div className={style.container}>
            
            <h1 className={style.tituloHeader}> Destinos mais procurados</h1>
            <p className={style.paragrafoHeader}>Opções mais procuradas por viajantes do Brasil</p>
            
            <Swiper
                slidesPerView={sliderPerView}
                pagination={{ clickable: true }}
                spaceBetween={25}
            >
                {
                    data.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                
                                <img className={style.slide_item} src={item.imagem} alt="" />
                                <h3 className={style.h3}>{item.text}</h3>
                                
                                <p className={style.comodos}>{item.acomodacoes}</p>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        
        </div>
    );
}
