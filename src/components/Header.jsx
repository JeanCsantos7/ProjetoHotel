import { Link } from 'react-router-dom';
import logotipo from '../assets/image/pngtree-community-people-care-logo-and-symbols-template-family-corporate-social-vector-png-image_10887238-removebg-preview.png';
import style from '../style/Header.module.css';

export default function Header() {
    return (
        <>
            <div className={style.container}>
                
                <nav className={style.navbar}>
                    
                    <Link className={style.links} to={'/'}>
                        
                        <img id={style.logotipo} src={logotipo} alt="logotipo" />

                    </Link>

                    <Link className={style.links} to={'/Destinos'}>
                       
                        Destinos

                    </Link>
                    <Link className={style.links} to={'/Sobre'}>
                       
                        Sobre

                    </Link>
                    <Link className={style.links} to={'/Contato'}>
                        
                        Contato
                        
                    </Link>
                
                </nav>

            </div>
        </>
    );
}
