import Image from "next/image";
import styles from "./styles.module.css";

export default function Dialog({
  text,
  animation,
}: {
  text: string;
  animation: string;
}) {
  let style: any;
  switch (animation) {
    case "aparece1":
      style = styles.aparece1;
      break;
    case "aparece2":
      style = styles.aparece2;
      break;
    case "escribir":
      style = styles.escribir;
      break;
    default:
      break;
  }

  return (
    <main className={styles.main}>
      <div className={`${styles.text} ${style}`}>
        <p>{text}</p>
      </div>
    </main>
  );
}
