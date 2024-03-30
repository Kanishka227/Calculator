import styles from "./ButtonsContainer.module.css"

function ButtonsContainer({onButtonClick}){
  const buttons = ['C','1','2','3','4','5','6','7','8','9','0','.','+','-','*','/','=']


  return (
    <div className={styles.buttonsContainer}>
        {
          buttons.map((button)=> {
             return(
                <button key={button} className={styles.btn} onClick={()=> onButtonClick(button)}>{button}</button>
             )
          })
        }
    </div>
    )
  
}
export default ButtonsContainer