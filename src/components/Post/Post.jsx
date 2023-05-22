import Comment from '../Comment/Comment';
import styles from './Post.module.css'

function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://avatars.githubusercontent.com/u/67129573?v=4'/>
                    <div className={styles.auhtorInfo}>
                        <strong>Luan Rodrigues</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='21 de maio as 18:48' dateTime='2023-05-21 18:38:47'>Públicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala Pessoal!</p>
                <p>Acabei de subir mais um projeto no meu Portifolio! é um que fiz no curso da Rocket!</p>
                <p><a href='/'>Luanrodrigues.me </a></p>
                <p>
                    <a href='/'>#Novoprojeto</a>{' '}
                    <a href='/'>#React</a>{' '}
                    <a href='/'>#Rocketseat</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu Comentario</strong>

                <textarea
                placeholder='Deixe um Comentario'
                />
                <footer>
                <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.CommentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    ) 
}

export default Post;