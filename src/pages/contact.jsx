import styles from "../styles/contact.module.css";

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.heading}>Contact Me</h1>

      <form className={styles.form}>
        <label className={styles.label}>Name:</label>
        <input className={styles.input} type="text" required />

        <label className={styles.label}>Email:</label>
        <input className={styles.input} type="email" required />

        <label className={styles.label}>Message:</label>
        <textarea className={styles.textarea} required></textarea>

        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </form>

      <div className={styles.socials}>
        <h3>Connect with me:</h3>
        <a href="https://github.com/ma441622" target="_blank">
          GitHub
        </a>
        <a
          href="https://instagram.com/m2alia"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}

export default Contact;
