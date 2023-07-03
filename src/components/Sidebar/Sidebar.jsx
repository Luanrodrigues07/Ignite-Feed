import Avatar from '../Avatar/Avatar';
import styles from './Login.module.css'
import { PencilLine } from 'phosphor-react'
import libertalogo from '../images/libertalogo.png'

function Sidebar() {
    return(
        <div className={styles.login}>
            <footer>
                <img src={libertalogo}/>
                <strong>bem-vindo(a) ao Head Control!</strong>
                <div className={styles.pageon}>
                <label>Email</label>
                <input type='text' placeholder='Email@liberta.com.vc'/>
            </div>

                <div className={styles.pageon}>
                <label>Senha</label>
                <input type='password'/>
            </div>
                <button href="#" >Login</button>
            </footer>
        </div>
    )
}

export default Sidebar;