import { motion } from "framer-motion";
import styles from "../styles/projects.module.css";
import quizAppImage from "../assets/quizappone.png";
import quizAppImageTwo from "../assets/quizapptwo.png";
import personTest from "../assets/personTest.png";
import personTestTwo from "../assets/personTestTwo.png";
import reviewSys from "../assets/reviewSys.png";
import reviewSysTwo from "../assets/reviewSysTwo.png";

function Projects() {
  return (
    //quiz app
    <div className={styles.projectsContainer}>
      <h1 className={styles.heading}>My Projects</h1>
      <div className={styles.project}>
        <h2 className={styles.subheading}>Quiz App</h2>
        <div className={styles.imageGroup}>
          <motion.img
            src={quizAppImage}
            alt="Quiz App"
            className={styles.projectImage}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={quizAppImageTwo}
            alt="Quiz App"
            className={styles.projectImage}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <p className={styles.description}>
          A project created in Mobile Development that allows for a
          single-answer, a multi-choice question, and a true or false. At the
          end the user can see how many questions they got correct.
        </p>
        <a
          className={styles.link}
          href="https://www.youtube.com/watch?v=lABrHpw4Y3o"
          target="_blank"
        >
          View Quiz App
        </a>
      </div>




      <div className={styles.project}>
        <h2 className={styles.subheading}>Personality Test</h2>
        <div className={styles.imageGroup}>
          <motion.img
            src={personTest}
            alt="Personality Test"
            className={styles.projectImage}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={personTestTwo}
            alt="Personality Test"
            className={styles.projectImage}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <p className={styles.description}>
          A project created in client-side scripting that allowed users to find
          out whether they're a square, circle, or squircle depending on their
          answers to two questions. At the end they're shown their results and
          receive a downloadable badge.
        </p>
        <a
          className={styles.link}
          href="https://students.gaim.ucf.edu/~ma441622/dig3716c/assignment2/survey.html"
          target="_blank"
        >
          View Personality Test
        </a>
      </div>





      <div className={styles.project}>
        <h2 className={styles.subheading}>Review System</h2>
        <div className={styles.imageGroup}>
          <motion.img
            src={reviewSys}
            alt="Review System"
            className={styles.projectImage}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={reviewSysTwo}
            alt="Review System"
            className={styles.projectImage}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <p className={styles.description}>
          A project created in server-side scripting that allows for a
          multi-user review system.
        </p>
        <a
          className={styles.link}
          href="https://students.gaim.ucf.edu/~ma441622/dig3134/assignment06/login.php"
          target="_blank"
        >
          View Review System
        </a>
      </div>
    </div>
  );
}

export default Projects;
