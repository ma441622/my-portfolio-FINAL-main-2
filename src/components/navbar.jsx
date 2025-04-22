// Navbar.jsx
import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.logo}>Malia's Portfolio</h1>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
