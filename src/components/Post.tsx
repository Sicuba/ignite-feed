import styles from "./Post.module.css";
import avatar from "../assets/avatar.jpeg";
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.profile}>
          <img
            src={avatar}
            alt="https://avatars.githubusercontent.com/u/113895967?v=4"
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
    </article>
  );
}
