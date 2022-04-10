import React from 'react';
import styles from "./Contact.module.scss"
import {SiFacebook, SiTwitter, SiYoutube} from "react-icons/si";
    // import "tailwindcss/tailwind.css";

const Contact = () => {
    return (
        <>
            {
            <div>
                <form>
                    <div class={styles.parent}>
                        <div class={styles.card}>
                            <h1 class={styles.h1}>Contact us</h1>
                            <div class={styles.space}>
                                <div class={styles.w}>
                                    <input type="text" placeholder="Name" class={styles.input} />
                                </div>
                                <div class={styles.w}>
                                    <input type="text" placeholder="Email" class={styles.input} />
                                </div>
                                <div class={styles.w}>
                                    <input type="text" placeholder="Message" class={styles.input1} />
                                </div>

                            </div>
                            <button class={styles.button}>Button</button>
                            <div className={styles.rating1}>
                                <input type="radio" name="rating-2" className={styles.star}/>
                                <input type="radio" name="rating-2" className={styles.star} checked/>
                                <input type="radio" name="rating-2" className={styles.star}/>
                                <input type="radio" name="rating-2" className={styles.star}/>
                                <input type="radio" name="rating-2" className={styles.star}/>
                            </div>
                        </div>

                    </div>

                </form>




                <footer className={styles.basement}>
                    <div className={styles.copyright}>
                        <p>Copyright © 2022 - All right reserved</p>
                    </div>
                    <div className={styles.socialicons}>
                        <SiTwitter size={30}/>

                        <SiYoutube size={30}/>
                        <SiFacebook size={30}/>
                    </div>
                </footer>

            </div>
            }
         </>
    );
};

export default Contact;