import React from 'react';
import styles from './Message.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Message = ({type}) => {
  if(type === "contact") {
      return(
        <div  className={styles.message}>
            <p>Discover More.</p>
        <span>From channels to chat,learn how zuri chat works from top to bottom</span>
        <div className={styles.buttonSection}>
            <button className={styles.buttonOutline}><a>Visit Help Center</a></button>
        </div>
    </div>
      )
  }
  return (
    <div className={styles.message}>
    <p>Whatever work you do,you can do it in Zuri Chat</p>
    <div className={styles.buttonSection}>
        <button className={styles.buttonFilled}><Link className = {`${styles.link} ${styles.linkFilled}`}to="/features">Talk to Sales</Link></button>
        <button className={styles.buttonOutline}><Link className = {styles.link} to="/">TRY IT FREE</Link></button>
    </div>
</div>
  )

}
export default Message;