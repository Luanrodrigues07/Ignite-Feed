import Header from './components/Header/Header'
import './global.css'
import styles from './App.module.css'
import Sidebar from './components/Sidebar/Sidebar'
import Comment from './components/Comment/Comment.jsx'

// author: { avatar_url: "", name: "", role: "", }
//publishedAt: date
//content: string



function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrappers}>
        <Sidebar />
        <main>
        </main>
      </div>
    </div>
    )
}

export default App
