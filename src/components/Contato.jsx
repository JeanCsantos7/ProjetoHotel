import Header from './Header';
import style from '../style/Contato.module.css';
import Email from '../assets/image/Email.png';
import Telefone from '../assets/image/telefone.png';
import Mapa from '../assets/image/mapa.png';
import Instagram from '../assets/image/instagram.png';
import Whatsapp from '../assets/image/whatsapp.png';
import Facebook from '../assets/image/facebook.png';

export default function Contato() {
    return (
        <>
            <Header></Header>

            <form action="#" className={style.primeiroForm}>

                <div className={style.container1}>
                    <h1 className={style.EntreContato}>Entre em contato conosco</h1>

                    <span className={style.meiosContato}>

                        <img src={Email} alt="" />
                        <p>Jctrip777@gmail.com</p>

                    </span>

                    <span className={style.meiosContato}>

                        <img src={Mapa} alt="" />
                        <p>Rua Primeiro de Maio - 272, 05885782</p>

                    </span>

                    <span className={style.meiosContato}>

                        <img src={Telefone} alt="" />
                        <p>(11)964699139</p>

                    </span>

                    <nav>

                        <h4 className={style.Redes}>Redes sociais</h4>
                        
                        <div className={style.navFooter}>

                            <img className={style.icon} src={Instagram} alt="" />
                            <img className={style.icon} src={Whatsapp} alt="" />
                            <img className={style.icon} src={Facebook} alt="" />

                        </div>

                    </nav>

                </div>

                <div className={style.container2}>

                    <h1 className={style.EnvieMensagem}>Envie a mensagem</h1>
                    
                    <form action="" className={style.segundoForm}>
                        
                        <label htmlFor="">Nome</label>
                        <input className={style.campoEntrada} type="text" />

                        <label htmlFor="">Email</label>
                        <input className={style.campoEntrada} type="text" />

                        <label htmlFor="">Telefone</label>
                        <input className={style.campoEntrada} type="text" />

                        <label htmlFor="">Mensagem</label>
                        <input className={style.campoMensagem} type="text" />

                        <button className={style.button}>Enviar</button>
                    </form>

                </div>
                
            </form>
        </>
    );
}
