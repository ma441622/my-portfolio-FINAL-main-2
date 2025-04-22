import { motion } from "framer-motion";
import styles from "../styles/about.module.css";

function About() {
  const skills = [
    "React.js",
    "JavaScript",
    "CSS, HTML",
    "After Effects",
    "Photoshop",
    "Premiere Pro",
  ];

  const interests = [
    "Fashion", 
    "Pinterest", 
    "Social Media", 
    "Design"];

  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.heading}>About Me</h1>

      <p className={styles.intro}>
        My name is Malia, I'm 21 years old. I attend the University of Central
        Florida, majoring in Web Design since 2024.
      </p>

      <h2 className={styles.subheading}>Skills:</h2>

      <ul className={styles.skillsList}>
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className={styles.skillItem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>

      <h2 className={styles.subheading}>Interests:</h2>
      
      <ul className={styles.interestsList}>
        {interests.map((interest, index) => (
          <li key={index} className={styles.interestItem}>
            <span className={styles.arrow}>➔</span> {interest}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;
