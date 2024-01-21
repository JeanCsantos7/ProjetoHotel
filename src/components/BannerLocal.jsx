import style from '../style/BannerLocal.module.css';

export default function BannerLocal() {
    return (
        <>
            <main>

                <h1 className={style.titulo}>Pra onde você quer viajar?</h1>
                <p className={style.texto}>Escolha o estado e cidade para achar as melhores pousadas</p>
            
            </main>
            
        </>
    );
}
