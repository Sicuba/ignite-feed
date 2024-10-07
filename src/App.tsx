import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./styles/global.css";
import { Aside } from "./components/Aside";
import { Post } from "./components/Post";
function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Aside/>
        <main>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </main>
      </div>
    </div>
  );
}

export default App;
