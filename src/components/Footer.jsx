import style from '../style/Footer.module.css';
import Instagram from '../assets/image/instagram.png';
import Whatsapp from '../assets/image/whatsapp.png';
import Facebook from '../assets/image/facebook.png';

export default function Footer() {
    return (
        <>
            <footer>

                <div className={style.container}>

                    <h1 className={style.tituloFooter}>Economize tempo, economize dinheiro!</h1>
                    <h3 className={style.subTitulo}>Digite seu email pra receber as ofertas!</h3>

                    <span className={style.spane}>

                        <input className={style.campoEntrada} type="text" placeholder='Seu E-mail' />
                        <button className={style.btnEntrada}>Inscreva-se</button>
                    
                    </span>

                </div>

                <nav>

                    <h1 className={style.tituloNav}>Acesse nossas redes sociais!</h1>

                    <div className={style.navFooter}>

                        <img className={style.icon} src={Instagram} alt="" />
                        <img className={style.icon} src={Whatsapp} alt="" />
                        <img className={style.icon} src={Facebook} alt="" />
                    
                    </div>
                
                </nav>
                
            </footer>
        </>
    );
}
