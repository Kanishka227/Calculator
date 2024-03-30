import styles from './App.module.css'
import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'
import { useState } from 'react'
import Heading from './components/Heading'

function App() {
  const [display,setDisplay] = useState(" ")
  function onButtonClick(buttonText){
    if(buttonText === 'C'){
      setDisplay('')
    }
    else if(buttonText === '='){
      const res = eval(display)
      setDisplay(res)
    }
    else{
      setDisplay(display+buttonText)
    }
  }
  return (
    <div className={styles.mainContainer}>
      <Heading/>
      <Display display={display}/>
      <ButtonsContainer onButtonClick={onButtonClick}/>
    </div>
  )
}

export default App
