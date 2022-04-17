import React from 'react';
import styles from "./About.module.scss"
import flower from "../../asserts/flower.jpg";
 //import "tailwindcss/tailwind.css";

const AboutUs = () => {
    return (
       <div>
           <section className={styles.parent}>

               <div className={styles.cont}>
                   <div className={styles.wrap}>

                       <div className={styles.inner}>
                           <div className={styles.imagewrap}>
                               <img alt="content" className={styles.imagee}
                                    src={flower}/>
                           </div>
                           <h2 className={styles.h2}>Buy YouTube
                               Videos</h2>
                           <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang.
                               Pinterest cornhole brunch, slow-carb neutra irony.</p>
                           <button
                               className={styles.but}>Button
                           </button>
                       </div>


                       <div className={styles.inner}>
                           <div className={styles.imagewrap}>
                               <img src={flower} alt="content" className={styles.imagee}
                                    />
                           </div>
                           <h2 className={styles.h2}>The Catalyzer</h2>
                           <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang.
                               Pinterest cornhole brunch, slow-carb neutra irony.</p>
                           <button
                               className={styles.but}>Button
                           </button>
                       </div>
                   </div>

               </div>
           </section>
       </div>
    );
};

export default AboutUs;