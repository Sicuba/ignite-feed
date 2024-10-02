import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./styles/global.css";
import { Aside } from "./components/Aside";
function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Aside/>
        <main>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            doloribus omnis. Laborum voluptatibus sit{" "}
          </p>
          <p>
            {" "}
            architecto quis tempora quam culpa nemo omnis numquam sint eveniet,
            similique impedit maiores! Ad, ut.
          </p>
        </main>
      </div>
    </div>
  );
}

export default App;
