import { format } from 'date-fns'
import Avatar from '../Avatar/Avatar';
import Comment from '../Comment/Comment';
import styles from './Post.module.css'
import { useState } from 'react';

//estado = variaveis que eu quero que componente monitore

function Post({ author, publishedAt, content}) {
    const [comments, setComments] = useState([
    'Post muito bacana em!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDate = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
    }).format(publishedAt);

function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');

}

function HandleNewCommentChange() {
    setNewCommentText(event.target.value);
}

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
                {content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p>{line.content}</p>
                    }else if (line.type === 'link'){
                        return <p><a href='#'>{line.content}</a> </p>
                    }
                })}
               
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                name='comment'
                placeholder='Deixe um Comentario'
                value={newCommentText}
                onChange={HandleNewCommentChange}
                />
                <footer>
                <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.CommentList}>
                {comments.map(comments => {
                    return <Comment content={comments}/>
                })}
            </div>
        </article>
    ) 
}

export default Post;