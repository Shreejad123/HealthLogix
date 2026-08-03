import styles from "./footer.module.css";
import { IoCartSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className={styles.footer}>
      {/* Logo */}
      <div className={styles.column}>
        <h2 className={styles.logo} onClick={() => navigate("/")}>
          HealthLogix
        </h2>

        <p>Patient and surgery management dashboard with analytics.</p>
      </div>

      {/* Links */}
      <div className={styles.column}>
        <h3>Quick Links</h3>

        <p onClick={() => navigate("/LandingPage")}>Home</p>
        <p onClick={() => navigate("/patientTable")}>Surgeries</p>
        <p onClick={() => navigate("/")}>Logout</p>
        {/* <p onClick={() => navigate("/wishlist")}>Signup</p> */}
        <p onClick={() => navigate("/")}>Login</p>
      </div>

      {/* Social */}
      <div className={styles.column}>
        <h3>Follow Me</h3>

        <p>
          <a
            href="https://github.com/Shreejad123"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            &nbsp; Github
          </a>
        </p>

        <p>
          <a
            href="https://www.linkedin.com/in/shreeja-d-kotian-b4639a286/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            &nbsp; LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
