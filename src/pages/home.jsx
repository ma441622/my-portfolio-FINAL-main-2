import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.welcomeMessage}>
        <motion.h1
          className={styles.hello}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Hello,
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          I'm Malia
        </motion.p>
      </div>

      <p className={styles.message}>
        I'm a web design major with a passion for designing!
      </p>

      <p className={styles.messagetwo}>
        I hope you enjoy my portfolio and feel free to contact me for more info,
        located in the contact section.
      </p>
    </div>
  );
}

export default Home;
