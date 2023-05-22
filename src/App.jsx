import Post from './components/Post/Post.jsx'
import Header from './components/Header/Header'
import './global.css'
import styles from './App.module.css'
import Sidebar from './components/Sidebar/Sidebar'
import Comment from './components/Comment/Comment.jsx'

function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
        author="Luan Rodrigues" 
        content="Olá pessoal!"
    />
    <Post
        author="Gabriel"
        content="Serie B"
    />
        </main>
      </div>
    </div>
    )
}

export default App
