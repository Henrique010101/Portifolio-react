import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import imagemGrindzone from "../../assets/imagem-grindzone.png"
import Login from "../../assets/siteLogin.png"
import Focus from "../../assets/imagem-focus.png"
import VieVi from "../../assets/Vi&Vi.png"
import emContrucao from "../../assets/em-construcao.png"
import jogo_da_velha from "../../assets/Jogo_da_velha.png"



function projetos() {

  return (
    <div className="containerProject" id="Projetos">
      <h1 className="heading">C:\Users\Henrique\Projetos:</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 5,
          stretch: 0,
          depth: 110,
          modifier: 2,
          slideShadows: false,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <div className="card">
            <a href="" target="_blank">
              <img className="building" src={emContrucao} alt="build image" />
              <img className="img-card" src={VieVi} alt="slide_image" />
            </a>
            <div className="text-card">
              <h2 className="titulo"><strong>Vi&Vi Odonto</strong></h2>
              <h2 className="tecnologias">Bootstrap</h2>
              <p className="descricao">Este site foi feito apenas com Bootstrap. um projeto pessoal (por enquanto) para meu amigo futuro Doutor, e minha amiga Doutora.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <a href="https://login-react-sand.vercel.app/" target="_blank">
              <img className="img-card" src={Login} alt="slide_image" />
            </a>
            <div className="text-card">
              <h2 className="titulo"><strong>Login</strong></h2>
              <h2 className="tecnologias">React | Syled Components</h2>
              <p className="descricao">Este sistema de login foi feito com banco de dados local, desenvolvi quando estava aprendendo a usar Styled Components.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <a href="https://grinzone.vercel.app/" target="_blank">
              <img className="building" src={emContrucao} alt="build image" />
              <img className="img-card" src={imagemGrindzone} alt="slide_image" />
            </a>
            <div className="text-card">
              <h2 className="titulo"><strong>GrindZone</strong></h2>
              <h2 className="tecnologias">Bootstrap | MongoDB</h2>
              <p className="descricao">Eu estou usando tudo que aprendi até o momento neste site. diversas funcionalidades no back-end, com banco de dados NoSQL ( MongoDB ).</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <a href="https://focus-steel-seven.vercel.app/" target="_blank">
              <img className="img-card" src={Focus} alt="slide_image" />
            </a>
            <div className="text-card">
              <h2 className="titulo"><strong>Focus</strong></h2>
              <h2 className="tecnologias">Javascript</h2>
              <p className="descricao">Fiz este projeto para praticar manipulação de DOM entre outros métodos js.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <a href="https://jogo-da-velha-two-ruby.vercel.app/" target="_blank">
              <img className="img-card" src={jogo_da_velha} alt="slide_image" />
            </a>
            <div className="text-card">
              <h2 className="titulo"><strong>Jogo da velha</strong></h2>
              <h2 className="tecnologias">Javascript</h2>
              <p className="descricao">Fiz este jogo para melhorar minha sintaxe javascript.</p>
            </div>
          </div>
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  )
}

export default projetos