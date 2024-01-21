
import Header from './Header'
import style from '../style/Destinos.module.css'
import RiodeJaneiro from '../assets/image/Destino RJ.jpg'
import SaoPaulo from '../assets/image/Destinos São Paulo.webp'
import Salvador from '../assets/image/Destino Salvador.jpeg'
import Curitiba from '../assets/image/Destino curitiba.jpg'
import BeloHorizonte from '../assets/image/Destino BH.jpg'
import PortoGalinhas from '../assets/image/Destino PortodeGalinhas.jpg'
import PortoAlegre from '../assets/image/Destino PortoAlegre.webp'
import FernandoNoronha from '../assets/image/Destino FernandoNoronha.jpg'
import NovaYork from '../assets/image/nova york.webp'
import Inglaterra from '../assets/image/Inglaterra.jpg'
import Paris from '../assets/image/Paris.png'
import Berlim from '../assets/image/Berlim.webp'
import Madrid from '../assets/image/Madrid.png'
import Santiago from '../assets/image/SantiagoChile.jpg'
import Roma from '../assets/image/Roma.jpg'
import Dublin from '../assets/image/Dublin.webp'


import { FaStar } from "react-icons/fa6";



export default function Destinos() {
  return (
    <>
      <Header></Header>

      <div className={style.BarraLateral}>
        <h1 className={style.destinosNacionais}>Destinos Nacionais</h1>
      </div>


      <div className={style.containerNacionais}>

        <span className={style.containerCardsNacionais}>


          <div className={style.cardNacionais}>
            <img className={style.imagemNacional} src={SaoPaulo} alt="" />
            <h1 className={style.tituloPacotes}>São Paulo</h1>
            <figure>
              <h5>8.5</h5>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
            </figure>
            <p className={style.Hotel}>Hotel + Aéreo</p>
            <hr />
            <h2 className={style.precoFinal}>Preço final por pessoa</h2>
            <p className={style.valorPassagem}>R$ 824,00</p>
            <h2 className={style.precoFinal2}>Taxas e impostos inclusos</h2>
          </div>

          <div className={style.cardNacionais}>
            <img className={style.imagemNacional} src={RiodeJaneiro} alt="" />
            <h1 className={style.tituloPacotes}>Rio de Janeiro</h1>
            <figure>
              <h5>8.0</h5>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
            </figure>
            <p className={style.Hotel}>Hotel + Aéreo</p>
            <hr />
            <h2 className={style.precoFinal}>Preço final por pessoa</h2>
            <p className={style.valorPassagem}>R$ 850,00</p>
            <h2 className={style.precoFinal2}>Taxas e impostos inclusos</h2>
          </div>

          <div className={style.cardNacionais}>
            <img className={style.imagemNacional} src={BeloHorizonte} alt="" />
            <h1 className={style.tituloPacotes}> Belo Horizonte</h1>
            <figure>
              <h5 style={{ backgroundColor: 'rgb(224, 164, 43)' }}>6.5</h5>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
            </figure>
            <p className={style.Hotel}>Hotel + Aéreo</p>
            <hr />
            <h2 className={style.precoFinal}>Preço final por pessoa</h2>
            <p className={style.valorPassagem}>R$ 415,00</p>
            <h2 className={style.precoFinal2}>Taxas e impostos inclusos</h2>
          </div>

          <div className={style.cardNacionais}>
            <img className={style.imagemNacional} src={Salvador} alt="" />
            <h1 className={style.tituloPacotes}>Salvador</h1>
            <figure>
              <h5 >7.5</h5>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
            </figure>
            <p className={style.Hotel}>Hotel + Aéreo</p>
            <hr />
            <h2 className={style.precoFinal}>Preço final por pessoa</h2>
            <p className={style.valorPassagem}>R$ 625,00</p>
            <h2 className={style.precoFinal2}>Taxas e impostos inclusos</h2>
          </div>




        </span>

        <span className={style.containerCardsNacionais}>


          <div className={style.cardNacionais}>
            <img className={style.imagemNacional} src={FernandoNoronha} alt="" />
            <h1 className={style.tituloPacotes}>Fernando de Noronha</h1>
            <figure>
              <h5>9.0</h5>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
            </figure>
            <p className={style.Hotel}>Hotel + Aéreo</p>
            <hr />
            <h2 className={style.precoFinal}>Preço final por pessoa</h2>
            <p className={style.valorPassagem}>R$ 900,00</p>
            <h2 className={style.precoFinal2}>Taxas e impostos inclusos</h2>
          </div>

          <div className={style.cardNacionais}>
            <img className={style.imagemNacional} src={PortoGalinhas} alt="" />
            <h1 className={style.tituloPacotes}>Porto de Galinhas</h1>
            <figure>
              <h5>8.0</h5>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
            </figure>
            <p className={style.Hotel}>Hotel + Aéreo</p>
            <hr />
            <h2 className={style.precoFinal}>Preço final por pessoa</h2>
            <p className={style.valorPassagem}>R$ 750,00</p>
            <h2 className={style.precoFinal2}>Taxas e impostos inclusos</h2>
          </div>

          <div className={style.cardNacionais}>
            <img className={style.imagemNacional} src={Curitiba} alt="" />
            <h1 className={style.tituloPacotes}>Curitiba</h1>
            <figure>
              <h5>7.0</h5>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
            </figure>
            <p className={style.Hotel}>Hotel + Aéreo</p>
            <hr />
            <h2 className={style.precoFinal}>Preço final por pessoa</h2>
            <p className={style.valorPassagem}>R$ 350,00</p>
            <h2 className={style.precoFinal2}>Taxas e impostos inclusos</h2>
          </div>

          <div className={style.cardNacionais}>
            <img className={style.imagemNacional} src={PortoAlegre} alt="" />
            <h1 className={style.tituloPacotes}>Porto Alegre</h1>
            <figure>
              <h5 style={{ backgroundColor: 'rgb(224, 164, 43)' }} >6.5</h5>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
            </figure>
            <p className={style.Hotel}>Hotel + Aéreo</p>
            <hr />
            <h2 className={style.precoFinal}>Preço final por pessoa</h2>
            <p className={style.valorPassagem}>R$ 500,00</p>
            <h2 className={style.precoFinal2}>Taxas e impostos inclusos</h2>
          </div>




        </span>

        <div className={style.BarraLateral2}>
          <h1 className={style.destinosInternacionais}>Destinos Internacionais</h1>
        </div>

        <span className={style.containerCardsNacionais}>


          <div className={style.cardNacionais}>
            <img className={style.imagemNacional} src={NovaYork} alt="" />
            <h1 className={style.tituloPacotes}>Nova York</h1>
            <figure>
              <h5>9.0</h5>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
            </figure>
            <p className={style.Hotel}>Hotel + Aéreo</p>
            <hr />
            <h2 className={style.precoFinal}>Preço final por pessoa</h2>
            <p className={style.valorPassagem}>R$ 2590,00</p>
            <h2 className={style.precoFinal2}>Taxas e impostos inclusos</h2>
          </div>

          <div className={style.cardNacionais}>
            <img className={style.imagemNacional} src={Inglaterra} alt="" />
            <h1 className={style.tituloPacotes}>Londres</h1>
            <figure>
              <h5>9.5</h5>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
            </figure>
            <p className={style.Hotel}>Hotel + Aéreo</p>
            <hr />
            <h2 className={style.precoFinal}>Preço final por pessoa</h2>
            <p className={style.valorPassagem}>R$ 3500,00</p>
            <h2 className={style.precoFinal2}>Taxas e impostos inclusos</h2>
          </div>

          <div className={style.cardNacionais}>
            <img className={style.imagemNacional} src={Paris} alt="" />
            <h1 className={style.tituloPacotes}>Paris</h1>
            <figure>
              <h5>8.5</h5>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
            </figure>
            <p className={style.Hotel}>Hotel + Aéreo</p>
            <hr />
            <h2 className={style.precoFinal}>Preço final por pessoa</h2>
            <p className={style.valorPassagem}>R$ 3700,00</p>
            <h2 className={style.precoFinal2}>Taxas e impostos inclusos</h2>
          </div>

          <div className={style.cardNacionais}>
            <img className={style.imagemNacional} src={Berlim} alt="" />
            <h1 className={style.tituloPacotes}>Berlim</h1>
            <figure>
              <h5 >7.5</h5>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
            </figure>
            <p className={style.Hotel}>Hotel + Aéreo</p>
            <hr />
            <h2 className={style.precoFinal}>Preço final por pessoa</h2>
            <p className={style.valorPassagem}>R$ 4030,00</p>
            <h2 className={style.precoFinal2}>Taxas e impostos inclusos</h2>
          </div>




        </span>

        <span className={style.containerCardsNacionais}>


          <div className={style.cardNacionais}>
            <img className={style.imagemNacional} src={Dublin} alt="" />
            <h1 className={style.tituloPacotes}>Dublin</h1>
            <figure>
              <h5>8.0</h5>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
            </figure>
            <p className={style.Hotel}>Hotel + Aéreo</p>
            <hr />
            <h2 className={style.precoFinal}>Preço final por pessoa</h2>
            <p className={style.valorPassagem}>R$ 4052,00</p>
            <h2 className={style.precoFinal2}>Taxas e impostos inclusos</h2>
          </div>

          <div className={style.cardNacionais}>
            <img className={style.imagemNacional} src={Roma} alt="" />
            <h1 className={style.tituloPacotes}>Roma</h1>
            <figure>
              <h5>9.0</h5>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
            </figure>
            <p className={style.Hotel}>Hotel + Aéreo</p>
            <hr />
            <h2 className={style.precoFinal}>Preço final por pessoa</h2>
            <p className={style.valorPassagem}>R$ 3800</p>
            <h2 className={style.precoFinal2}>Taxas e impostos inclusos</h2>
          </div>

          <div className={style.cardNacionais}>
            <img className={style.imagemNacional} src={Santiago} alt="" />
            <h1 className={style.tituloPacotes}>Santiago</h1>
            <figure>
              <h5>8.5</h5>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
            </figure>
            <p className={style.Hotel}>Hotel + Aéreo</p>
            <hr />
            <h2 className={style.precoFinal}>Preço final por pessoa</h2>
            <p className={style.valorPassagem}>R$ 890,00</p>
            <h2 className={style.precoFinal2}>Taxas e impostos inclusos</h2>
          </div>

          <div className={style.cardNacionais}>
            <img className={style.imagemNacional} src={Madrid} alt="" />
            <h1 className={style.tituloPacotes}>Madrid</h1>
            <figure>
              <h5 style={{ backgroundColor: 'rgb(224, 164, 43)' }} >6.5</h5>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
              <FaStar className={style.estrela}></FaStar>
            </figure>
            <p className={style.Hotel}>Hotel + Aéreo</p>
            <hr />
            <h2 className={style.precoFinal}>Preço final por pessoa</h2>
            <p className={style.valorPassagem}>R$ 3242,00</p>
            <h2 className={style.precoFinal2}>Taxas e impostos inclusos</h2>
          </div>




        </span>



















      </div>

    </>
  )
}