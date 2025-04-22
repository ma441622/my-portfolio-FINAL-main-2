import styles from "../styles/footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2025 Malia Major. All Rights Reserved.</p>
      <a
        href="https://github.com/ma441622"
        target="_blank"
        className={styles.link}
      >
        GitHub
      </a>
    </footer>
  );
}

export default Footer;
