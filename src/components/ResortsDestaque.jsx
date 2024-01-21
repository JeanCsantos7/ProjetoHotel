import style from '../style/ResortsDestaque.module.css';
import PousadaSP from '../assets/image/Pousada IlhaBela.jpg';
import PousadaSalvador from '../assets/image/Pousada Salvador.jpg';
import PousadaRJ from '../assets/image/Pousada RJ.jpg';
import PousadaIpanema from '../assets/image/Pousada Ipanema.jpg';

export default function ResortsDestaque() {
    return (
        <>
            <h1 className={style.titulo}>Pousadas Recomendadas</h1>

            <p className={style.paragrafo}>As melhores pousadas do país</p>

            <div className={style.container}>

                <span className={style.spanContainer}>

                    <div className={style.containerCard}>
                        
                        <img className={style.imgCard} src={PousadaSP} alt="" />
                        <h2>Pousada Ilha Bela</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quas quidem molestiae illum pariatur, aperiam enim cumque architecto reprehenderit doloremque in officiis blanditiis distinctio ab a adipisci voluptatibus earum ipsum.</p>
                    
                    </div>

                    <div className={style.containerCard}>
                        
                        <img className={style.imgCard} src={PousadaSalvador} alt="" />
                        <h2>Pousada Salvador</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quas quidem molestiae illum pariatur, aperiam enim cumque architecto reprehenderit doloremque in officiis blanditiis distinctio ab a adipisci voluptatibus earum ipsum.</p>
                    
                    </div>

                    <div className={style.containerCard}>
                        
                        <img className={style.imgCard} src={PousadaRJ} alt="" />
                        <h2>Pousada Paraty - RJ</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quas quidem molestiae illum pariatur, aperiam enim cumque architecto reprehenderit doloremque in officiis blanditiis distinctio ab a adipisci voluptatibus earum ipsum.</p>
                    
                    </div>

                    <div className={style.containerCard}>
                        
                        <img className={style.imgCard} src={PousadaIpanema} alt="" />
                        <h2>Pousada Ipanema - RJ</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quas quidem molestiae illum pariatur, aperiam enim cumque architecto reprehenderit doloremque in officiis blanditiis distinctio ab a adipisci voluptatibus earum ipsum.</p>
                    
                    
                    </div>
                
                </span>
            
            </div>
        </>
    );
}
