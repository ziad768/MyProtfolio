import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              style={{ marginRight: "10px" }}
              alt="Cursor icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I&apos;m a frontend developer with experience in building
                responsive and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("skills/react.png")}
              style={{ marginRight: "10px" }}
              width={80}
              height={70}
              alt="React"
            />
            <div className={styles.aboutItemText}>
              <h3>Experience of NextJs</h3>
              <p>
                I have experience developing Using ReactJS And Redux Toolkit
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/next.svg")}
              style={{ marginRight: "10px" }}
              width={80}
              height={100}
              alt="Cursor icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Experience of NextJs</h3>
              <p>
                I have experience developing Using NextJs and mongodb{" "}
                {"( Prisma )"}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
