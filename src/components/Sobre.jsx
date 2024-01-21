import Header from './Header';
import Footer from './Footer';
import style from '../style/SobreNos.module.css';
import { FaRegStar } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { FaLightbulb } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Pessoas from '../assets/image/People.jpg';

export default function Sobre() {
    return (
        <>
            <Header />

            <div className={style.containerSobre}>

                <h1 className={style.tituloHistoria}>Quem somos?</h1>
                <p className={style.paragrafoHistoria}>
                    A JcTrips foi fundada em 2016 quando enxergamos a oportunidade de transformar viagens em experiências únicas,
                    Especializados em proporcionar momentos inesquecíveis,
                    oferecemos opções de hospedagem e roteiros cuidadosamente selecionados para atender aos seus desejos de viagem:
                </p>

                <span className={style.QuemSomosCard}>
                    
                    <div className={style.cards}>
                        
                        <h1 className={style.titulos}>Titulo 1</h1>
                        <p className={style.paragrafoCards}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quos pariatur at soluta quia. Labore accusantium explicabo recusandae itaque quas ipsum maxime natus rem delectus similique? Asperiores voluptas ratione nulla.</p>
                    
                    </div>

                    <div className={style.cards}>
                        
                        <h1 className={style.titulos}>Titulo 2</h1>
                        <p className={style.paragrafoCards}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quos pariatur at soluta quia. Labore accusantium explicabo recusandae itaque quas ipsum maxime natus rem delectus similique? Asperiores voluptas ratione nulla.</p>
                    
                    </div>

                    <div id={style.ocultar} className={style.cards}>
                        
                        <h1 className={style.titulos}>Titulo 3</h1>
                        <p className={style.paragrafoCards}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quos pariatur at soluta quia. Labore accusantium explicabo recusandae itaque quas ipsum maxime natus rem delectus similique? Asperiores voluptas ratione nulla.</p>
                    
                    </div>

                    <div id={style.ocultar} className={style.cards}>
                        
                        <h1 className={style.titulos}>Titulo 4</h1>
                        <p className={style.paragrafoCards}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quos pariatur at soluta quia. Labore accusantium explicabo recusandae itaque quas ipsum maxime natus rem delectus similique? Asperiores voluptas ratione nulla.</p>
                    
                    </div>
                </span>
            </div>

            <h1 className={style.tituloMissao}>Missão, Visão, Propósito e Valores</h1>

            <div className={style.containerMissao}>
                
                <div className={style.containerIcones}>
                    <span className={style.spanIcones}>
                        
                        <FaRegStar className={style.icones}></FaRegStar>
                        <h3 className={style.tituloIcones}>Propósito</h3>
                        <p className={style.paragrafoIcones}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus aspernatur itaque molestiae </p>
                    
                    </span>

                    <span className={style.spanIcones}>
                        
                        <TbTargetArrow className={style.icones}></TbTargetArrow>
                        <h3 className={style.tituloIcones}>Missão</h3>
                        <p className={style.paragrafoIcones}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus aspernatur itaque molestiae </p>
                    
                    </span>

                    <span className={style.spanIcones}>
                        
                        <FaEye className={style.icones}></FaEye>
                        <h3 className={style.tituloIcones}>Visão</h3>
                        <p className={style.paragrafoIcones}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus aspernatur itaque molestiae </p>
                    
                    </span>
                </div>
            </div>

            <div className={style.containerValores}>
                
                <img className={style.imagemPeople} src={Pessoas} alt="" />
                
                <span className={style.ValoresCards}>
                    
                    <h1 className={style.tituloValores}>Valores</h1>
                    
                    <div className={style.ValoresInfos}>
                        
                        <FaRegStar className={style.iconesValores}></FaRegStar>
                        <h3 className={style.subtituloValores}>Melhoria Contínua</h3>
                    
                    </div>
                    
                    <p className={style.paragrafoValores}>Lorem ipsum dolor, sit amet consectetur  </p>

                    <div className={style.ValoresInfos}>
                        
                        <FaPeopleGroup className={style.iconesValores}></FaPeopleGroup>
                        <h3 className={style.subtituloValores}>Colaboração</h3>
                    
                    </div>
                    <p className={style.paragrafoValores}>Lorem ipsum dolor, sit amet consectetur </p>

                    <div className={style.ValoresInfos}>
                        
                        <FaHandshake className={style.iconesValores}></FaHandshake>
                        <h3 className={style.subtituloValores}>Respeito</h3>
                    
                    </div>
                    
                    <p className={style.paragrafoValores}>Lorem ipsum dolor, sit amet consectetur </p>
                
                </span>
            
            </div>

            <Footer />
        </>
    );
}
