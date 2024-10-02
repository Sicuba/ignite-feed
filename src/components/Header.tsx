import styles from "./Header.module.css"
import IgniteLogo from "../assets/ignite-logo.svg"
export function Header(){
    return(
        <div className={styles.header}>
        <img src={IgniteLogo} alt="Ignite Logo" /> <span>Ignite Feed</span>
        </div>
    )
}