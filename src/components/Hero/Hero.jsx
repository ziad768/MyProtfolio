
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ziad Hamdi Saad</h1>
        <p className={styles.description}>
          I'm a Front-end developer with  experience using React.
           Reach out if you'd like to learn more!
        </p>
        <a href="mailto:ziadhamdi7zezo@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a><a href="https://drive.google.com/file/d/1tkCBZ2coD_1-I_UHVd-1ePMFldRn3cMW/view?usp=drivesdk"  className={styles.contactBtn} style={{marginTop:"15px"}}>
          Go to CV
        </a>
      </div>
      <img
        src={getImageUrl("MYimage/1703723006547.jpeg")}
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
