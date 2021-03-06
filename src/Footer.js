import React from 'react';
import styles from './Footer.module.css';
import Message from './Message';

const Footer = ({showMessage,type}) => (
    <footer  className={styles.footer}>
            {showMessage && <Message type={type}/>}
            <div style={showMessage ? {paddingTop:"0px"}:{paddingTop:"67px"}} className={styles.notShow}>
            <section className={styles.topSection}>
            <div className={styles.logoWrapper}>
            <div className={styles.logo}>
               <img src="/images/zurichatlogo.svg" alt="" />
               <span className={styles.zuriText}>Zuri Chat</span>
           </div>
            </div>
           <nav className={styles.navContainer}>
               <ul className={styles.nav}>
                   <li className={styles.mainList}>
                       <span className={styles.title}>Company</span>
                       <li className={styles.subList}>
                        <a className={styles.link} href="/">Finalists</a>
                        <a className={styles.link} href="/">Events</a>
                        <a className={styles.link} href="/">Blog posts</a>
                        <a className={styles.link} href="/">News</a>
                       </li>
                   </li>
                   <li className={styles.mainList}>
                       <span className={styles.title}>Explore</span>
                       <li className={styles.subList}>
                        <a className={styles.link} href="/">Features</a>
                        <a className={styles.link} href="/">Plugins</a>
                       
                       </li>
                   </li>
                   <li className={styles.mainList}>
                       <span className={styles.title}>Resources</span>
                       <li className={styles.subList}>
                        <a className={styles.link} href="/">Designers</a>
                        <a className={styles.link} href="/">Developers</a>
                        <a className={styles.link} href="/">Mentors</a>
                       </li>
                   </li>
                   <li className={styles.mainList}>
                       <span className={styles.title}>Compare</span>
                       <li className={styles.subList}>
                        <a className={styles.link} href="/">Slack</a>
                        <a className={styles.link} href="/">Discord</a>
                       </li>
                   </li>
                   <li className={styles.mainList}>
                       
                       <span className={styles.title}>Social Media</span>
                       <div className={styles.socialMedia}>
                           <a><img src="/images/facebook.svg" alt="" /></a>
                           <a><img src="/images/instagram.svg" alt="" /></a>
                           <a><img src="/images/twitter.svg" alt="" /></a>
                           <a><img src="/images/linkedin.svg" alt="" /></a>
                       </div>
                   </li>
               </ul>
           </nav>
            </section>
            <section className={styles.bottomSection}>
                <p className={styles.copyright}>&copy;2021 Zuri, Team Aristotle. All Rights Reserved. </p>
                <nav className={styles.bottomNav}>
                    <ul className={styles.navItems}>
                        <li><a className={styles.bottomLink} href="/">Privacy</a></li>
                        <li><a className={styles.bottomLink} href="/">Terms</a></li>
                        <li><a className={styles.bottomLink} href="/">Help center</a></li>
                        <li><a className={styles.bottomLink} href="/">Contact Us</a></li>
                    </ul>
                </nav>
            </section>
            </div>
            
    </footer>
)

export default Footer;