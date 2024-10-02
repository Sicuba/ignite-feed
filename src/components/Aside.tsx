import {PencilLine} from "@phosphor-icons/react";
import styles from "./Aside.module.css";
export function Aside() {
  return (
    <aside className={styles.aside}>
      <img
        src="https://plus.unsplash.com/premium_photo-1685086785077-ff65bf749544?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div>
        <div  className={styles.profile}>
        <img src="https://avatars.githubusercontent.com/u/113895967?v=4"
        className={styles.avatar}
        />
        <strong>Josevaldo Sicuba</strong>
        <span>Front End</span>
        </div>
            
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
      </div>
    </aside>
  );
}
