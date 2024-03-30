import styles from "./Display.module.css"

function Display(props){
  return(
    <div className={styles.display} >
      <input type="text" value={props.display} readOnly/>
    </div>
  )
}

export default Display