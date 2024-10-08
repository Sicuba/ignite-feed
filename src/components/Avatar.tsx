import styles from "./Avatar.module.css"
export function Avatar({hasBordered = true, src}:{hasBordered?:boolean,src:string}){
    return(
        <div>
        <img src={src}
        className={hasBordered ? styles.avatarBordered : styles.avatar}
        />
        </div>
    )
}