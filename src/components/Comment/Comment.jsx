import { useState } from 'react';
import Avatar from '../Avatar/Avatar';
import styles from './Comment.module.css'
import {ThumbsUp, Trash} from 'phosphor-react'

function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);
    function HandleDeleteComment() {

        onDeleteComment(content);
    }
function handleLikeComment() {
    setLikeCount((state) => {
        return state + 1;
    });
}

    return(
        <div className={styles.Comment}>
            <Avatar hasBorder={false} src='https://avatars.githubusercontent.com/u/67129573?v=4'
            />

            <div className={styles.CommentBox}>

                <div className={styles.CommentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Luan Rodrigues</strong>
                            <time title='21 de maio as 18:48' dateTime='2023-05-21 18:38:47'>Cerca há 1h atrás</time>
                        </div>
                        <button onClick={HandleDeleteComment} title='Deletar'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>

                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>


        </div>
    )

}

export default Comment;