import Post from './components/Post/Post.jsx'
import Header from './components/Header/Header'
import './global.css'
import styles from './App.module.css'
import Sidebar from './components/Sidebar/Sidebar'
import Comment from './components/Comment/Comment.jsx'

// author: { avatar_url: "", name: "", role: "", }
//publishedAt: date
//content: string

const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/luanrodrigues07.png',
      name: 'Luan Rodrigues',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala Pessoal!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu Portifolio! é um que fiz no curso da Rocket!' },
      { type: 'link', content: 'Luanrodrigues.me' },
    ],
    publishedAt: new Date('2023-05-23 21:57:49')
    
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/GabrielMerigo.png',
      name: 'Gabriel Merigo',
      role: 'FullStack Developer & Mobile Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala Pessoal!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu Portifolio! é um que fiz no curso da Rocket!' },
      { type: 'link', content: 'Luanrodrigues.me' },
    ],
    publishedAt: new Date('2023-05-13 16:47:18')
    
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/JoaoVitorLima242.png',
      name: 'João Vitor Lima',
      role: 'Full Stack Web and Mobile Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala Pessoal!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu Portifolio! é um que fiz no curso da Rocket!' },
      { type: 'link', content: 'Luanrodrigues.me' },
    ],
    publishedAt: new Date('2023-05-13 16:47:18')
    
  },
];

function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map(post =>{
              return (
              <Post
              author={post.author}
              content={post.content}
              Date={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
    )
}

export default App
