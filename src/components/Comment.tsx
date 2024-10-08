import styles from "./Comment.module.css";
import avatar from "../assets/avatar.jpeg";
import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { Avatar } from "./Avatar";
export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
      hasBordered={false}
        src={avatar}
      />
      <div className={styles.commentContainer}>
        <div className={styles.commentBox}>
          <header>
            <div className={styles.profile}>
              <strong>Devon Lane</strong>
              <time title="Cerca de 2h" dateTime="08/10/2024 14:18">
                Cerca de 2h
              </time>
            </div>
            <button><Trash size={20} /></button>
            
          </header>
          <div className={styles.commentcontent}>
            <p>Muito bom Devon, parabéns!! 👏👏</p>
          </div>
        </div>
        <footer>
            <button>
          <ThumbsUp size={24} />
          <p>Aplaudir</p>
          <span >03</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
