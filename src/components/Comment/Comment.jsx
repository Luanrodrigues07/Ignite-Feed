import styles from './Comment.module.css'
import {ThumbsUp, Trash} from 'phosphor-react'

function Comment() {
    return(
        <div className={styles.Comment}>
            <img src='https://avatars.githubusercontent.com/u/67129573?v=4'
            />

            <div className={styles.CommentBox}>

                <div className={styles.CommentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Luan Rodrigues</strong>
                            <time title='21 de maio as 18:48' dateTime='2023-05-21 18:38:47'>Cerca há 1h atrás</time>
                        </div>
                        <button title='Deletar'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom!</p>

                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>


        </div>
    )

}

export default Comment;