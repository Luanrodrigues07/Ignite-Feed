import { format } from 'date-fns'

import Avatar from '../Avatar/Avatar';
import Comment from '../Comment/Comment';
import styles from './Post.module.css'



function Post({ author, publishedAt}) {
    const publishedDate = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
    }).format(publishedAt);

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.auhtorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title='21 de maio as 18:48' dateTime='2023-05-21 18:38:47'>
                    {publishedDate}
                    </time>
            </header>

            <div className={styles.content}>
               
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