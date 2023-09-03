import Image from "next/image";
import styles from "./styles.module.css";

// #127.0.0.1 localhost demo.app.inprovider.cl

export default function Chart({
  face,
  animation,
}: {
  face: string;
  animation: string;
}) {
  let type: any;
  switch (animation) {
    case "flota":
      type = styles.flota;
      break;
    case "rota":
      type = styles.rota;
      break;
    case "loco":
      type = styles.loco;
      break;
    default:
      break;
  }

  return (
    <main className={`${styles.main} ${type}`}>
      <div className={styles.body}>
        <Image
          className={styles.face}
          src={`/chart/face/face${face}.png`}
          width={150}
          height={150}
          alt="face Chart"
        />
      </div>
    </main>
  );
}
