import Avatar from '../Avatar/Avatar';
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50'
            />

            <div className={styles.profile}>
               <Avatar src="https://avatars.githubusercontent.com/u/67129573?v=4"/>


                <strong>Luan Rodrigues</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    )
}

export default Sidebar;