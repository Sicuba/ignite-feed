import styles from "./Post.module.css";
import avatar from "../assets/avatar.jpeg";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.profile}>
          <Avatar
            src={avatar}
          />
          <div className={styles.author}>
            <strong>Josevaldo Sicuba</strong>
            <span>Dev Front-End</span>
          </div>
        </div>

        <time dateTime="07/10/2024 21:15">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>

        <span>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </span>
      </div>
      <form className={styles.comment}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Nossa, adorei amigo! Parabéns" />
        <input type="submit" value="Publicar" />
      </form>

      <div className={styles.commentList}>
      <Comment/>
      <Comment/>
      <Comment/>
      </div>
    </article>
  );
}
