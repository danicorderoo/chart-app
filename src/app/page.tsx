"use client";
import styles from "./page.module.css";
import Chart from "./components/Chart";
import Dialog from "./components/Dialog";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";
import Confetti from "react-confetti";
import { ThemeProvider, createTheme } from "@mui/material";

const CHART_FLOTA = "flota";
const CHART_ROTA = "rota";
const CHART_LOCO = "loco";
const TEXT_ESCRIBE = "escribir";
const TEXT_APARECE1 = "aparece1";
const TEXT_APARECE2 = "aparece2";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8CA09C",
      light: "#8CA09C",
      dark: "#8CA09C",
      contrastText: "#ffff",
    },
    secondary: {
      main: "#DFAE4E",
      light: "#DFAE4E",
      dark: "#DFAE4E",
      contrastText: "#ffff",
    },
  },
});

export default function Home() {
  const [movie, setMovie] = useState(0);
  let { width, height } = useWindowSize();

  const size = useWindowSize();

  const getMovie = (movie: number) => {
    switch (movie) {
      case 0:
        return (
          <>
            <Dialog text="Bienvenida Anele" animation={TEXT_ESCRIBE} />
            <div className={styles.text}>
              <p>haz click para poder continuar</p>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <Dialog
              text="Hola guapa, como estas hoy?"
              animation={TEXT_APARECE1}
            />
            <div className={styles.chart}>
              <Chart face="1" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <Dialog
              text="Mi nombre es Chart y Daniel es mi creador..."
              animation={TEXT_APARECE2}
            />
            <div className={styles.chart}>
              <Chart face="16" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <Dialog
              text="cual es la razon? este momento..."
              animation={TEXT_APARECE1}
            />
            <div className={styles.chart}>
              <Chart face="4" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 4:
        return (
          <>
            <Dialog
              text="lleva planeando esto desde hace dias, y le dije es ahora o nunca campeon"
              animation={TEXT_APARECE2}
            />
            <div className={styles.chart}>
              <Chart face="3" animation={CHART_ROTA} />
            </div>
          </>
        );
      case 5:
        return (
          <>
            <Dialog
              text="Me conto todas las adversidades que han pasado juntos"
              animation={TEXT_APARECE1}
            />
            <div className={styles.chart}>
              <Chart face="17" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 6:
        return (
          <>
            <Dialog
              text="Pero tambien me conto todos los buenos momentos que han pasado juntos"
              animation={TEXT_APARECE1}
            />
            <div className={styles.chart}>
              <Chart face="7" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 7:
        return (
          <>
            <Dialog
              text="Le propuse un plan en el que si lo pasas sabras que te quiere preguntar Daniel al final"
              animation={TEXT_APARECE1}
            />
            <div className={styles.chart}>
              <Chart face="13" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 8:
        return (
          <>
            <div className={styles.options}>
              {" "}
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setMovie(100);
                }}
              >
                no
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={changeMovie}
              >
                si
              </Button>
            </div>
            <Dialog
              text="que me dices, estas lista?"
              animation={TEXT_APARECE1}
            />
            <div className={styles.chart}>
              <Chart face="19" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 9:
        return (
          <>
            <Dialog
              text="Genial! se trata de unas preguntas y pruebas... piensa con calma tus respuestas"
              animation={TEXT_APARECE1}
            />
            <div className={styles.chart}>
              <Chart face="18" animation={CHART_ROTA} />
            </div>
          </>
        );
      case 10:
        return (
          <>
            <div className={styles.options}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setMovie(200);
                }}
              >
                no
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  setMovie(300);
                }}
              >
                si
              </Button>
            </div>
            <Dialog
              text="porque de eso depende que lleguemos al final, ¿estas nerviosa?"
              animation={TEXT_APARECE1}
            />
            <div className={styles.chart}>
              <Chart face="11" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 11:
        return (
          <>
            <div className={styles.options}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setMovie(100);
                }}
              >
                no
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={changeMovie}
              >
                si
              </Button>
            </div>
            <Dialog text="Te gusta Daniel?" animation={TEXT_APARECE1} />
            <div className={styles.chart}>
              <Chart face="4" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 12:
        return (
          <>
            <div className={styles.options}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setMovie(100);
                }}
              >
                no
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={changeMovie}
              >
                si
              </Button>
            </div>
            <Dialog text="Quieres a Daniel?" animation={TEXT_APARECE1} />
            <div className={styles.chart}>
              <Chart face="4" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 13:
        return (
          <>
            <Dialog
              text="Te sere honesto, tu a el tambien le encantas! ♥"
              animation={TEXT_APARECE1}
            />
            <div className={styles.chart}>
              <Chart face="7" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 14:
        return (
          <>
            <Dialog
              text="Ya esto son motivos suficientes para revelarte la pregunta, SI AMBOS SE QUIEREN"
              animation={TEXT_APARECE1}
            />
            <div className={styles.chart}>
              <Chart face="7" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 15:
        return (
          <>
            <Dialog text="Pero..." animation={TEXT_ESCRIBE} />
            <div className={styles.chart}>
              <Chart face="13" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 16:
        return (
          <>
            <Dialog
              text="Seguiremos preguntando jajaja!"
              animation={TEXT_APARECE1}
            />
            <div className={styles.chart}>
              <Chart face="14" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 17:
        return (
          <>
            <div className={styles.options}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setMovie(100);
                }}
              >
                no
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={changeMovie}
              >
                si
              </Button>
            </div>
            <Dialog
              text="te imaginas un futuro con ese hombre que tienes al frente?"
              animation={TEXT_APARECE2}
            />
            <div className={styles.chart}>
              <Chart face="16" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 18:
        return (
          <>
            <div className={styles.options}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setMovie(100);
                }}
              >
                no
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={changeMovie}
              >
                si
              </Button>
            </div>
            <Dialog text="lo admiras?" animation={TEXT_APARECE2} />
            <div className={styles.chart}>
              <Chart face="11" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 19:
        return (
          <>
            <div className={styles.options}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setMovie(100);
                }}
              >
                no
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={changeMovie}
              >
                si
              </Button>
            </div>
            <Dialog
              text="estas dispuesta a respetarlo y darle mucho cariño?"
              animation={TEXT_APARECE2}
            />
            <div className={styles.chart}>
              <Chart face="11" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 20:
        return (
          <>
            <Dialog
              text="estoy comenzando a creer que los dos son unos tontos orgullosos jajajaja!"
              animation={TEXT_APARECE2}
            />
            <div className={styles.chart}>
              <Chart face="10" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 21:
        return (
          <>
            <Dialog
              text="el me dice lo mismo, que te admira como ningun otro hombre, que al ver te desnuda completamente tu cuerpo y alma"
              animation={TEXT_APARECE2}
            />
            <div className={styles.chart}>
              <Chart face="3" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 22:
        return (
          <>
            <Dialog
              text="que todo lo que quiere es vivir tranquilo a tu lado, y esta dispuesto a respetarte y valorarte"
              animation={TEXT_APARECE2}
            />
            <div className={styles.chart}>
              <Chart face="16" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 23:
        return (
          <>
            <Dialog
              text="que todo lo que quiere es vivir tranquilo a tu lado, y esta dispuesto a respetarte y valorarte"
              animation={TEXT_APARECE2}
            />
            <div className={styles.chart}>
              <Chart face="16" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 24:
        return (
          <>
            <Dialog
              text="ya estas son suficientes razones para saber la pregunta"
              animation={TEXT_APARECE2}
            />
            <div className={styles.chart}>
              <Chart face="13" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 25:
        return (
          <>
            <Dialog text="pero..." animation={TEXT_APARECE2} />
            <div className={styles.chart}>
              <Chart face="9" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 26:
        return (
          <>
            <Dialog
              text="antes me gustaria decirles algo muchachos..."
              animation={TEXT_APARECE2}
            />
            <div className={styles.chart}>
              <Chart face="7" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 27:
        return (
          <>
            <Dialog text="AMANCE!" animation={TEXT_APARECE2} />
            <div className={styles.chart}>
              <Chart face="7" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 28:
        return (
          <>
            <Dialog text="QUIERANSE!" animation={TEXT_APARECE2} />
            <div className={styles.chart}>
              <Chart face="7" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 29:
        return (
          <>
            <Dialog text="RESPETENSE!" animation={TEXT_APARECE2} />
            <div className={styles.chart}>
              <Chart face="7" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 30:
        return (
          <>
            <Dialog text="VALORENSE!" animation={TEXT_APARECE2} />
            <div className={styles.chart}>
              <Chart face="7" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 31:
        return (
          <>
            <Dialog
              text="NO PIERDAN TIEMPO EN DISCUCIONES!"
              animation={TEXT_APARECE2}
            />
            <div className={styles.chart}>
              <Chart face="7" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 32:
        return (
          <>
            <Dialog
              text="ENTIENDAN QUE QUIEREN ESTAR UNIDOS, HAGAN EL AMOR!"
              animation={TEXT_APARECE2}
            />
            <div className={styles.chart}>
              <Chart face="7" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 33:
        return (
          <>
            <Dialog
              text="es hora de que entiendan que si quieren seguir adelante pueden armar una nueva historia"
              animation={TEXT_APARECE2}
            />
            <div className={styles.chart}>
              <Chart face="16" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 34:
        return (
          <>
            <Dialog
              text="la pregunta que te quiere hacer Daniel es..."
              animation={TEXT_APARECE2}
            />
            <div className={styles.chart}>
              <Chart face="1" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 35:
        return (
          <>
            <div className={styles.options}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setMovie(100);
                }}
              >
                no
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={changeMovie}
              >
                si
              </Button>
            </div>
            <Dialog
              text="¿Quieres ser mi novia Ann?"
              animation={TEXT_APARECE2}
            />
          </>
        );
      case 36:
        return (
          <>
            <Dialog
              text="YA TIENEN FECHA MUCHACHOS! ♥ FELICIDADES! 03/09/2023"
              animation={TEXT_APARECE1}
            />
            <div className={styles.chart}>
              <Chart face="3" animation={CHART_LOCO} />
            </div>
          </>
        );
      case 37:
        return (
          <>
            <div>
              <Image
                className={styles.face1}
                src={"/he.jpg"}
                width={150}
                height={150}
                alt="he"
              />
              <Image
                className={styles.face2}
                src={"/she.jpg"}
                width={150}
                height={150}
                alt="shet"
              />
            </div>
            <Dialog
              text="QUIERO FELICITARLOS, HOY GANARON LOS DOS!"
              animation={TEXT_APARECE2}
            />
            <div className={styles.chart}>
              <Chart face="3" animation={CHART_LOCO} />
            </div>
          </>
        );

      case 100:
        return (
          <>
            <Dialog text="Te entendemos Ann!" animation={TEXT_ESCRIBE} />
            <div className={styles.chart}>
              <Chart face="2" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 200:
        return (
          <>
            <Dialog text="jajaja que bien!" animation={TEXT_ESCRIBE} />
            <div className={styles.chart}>
              <Chart face="16" animation={CHART_FLOTA} />
            </div>
          </>
        );
      case 300:
        return (
          <>
            <Dialog
              text="tranquila todo estara bien te lo prometo!"
              animation={TEXT_APARECE1}
            />
            <div className={styles.chart}>
              <Chart face="1" animation={CHART_FLOTA} />
            </div>
          </>
        );
      default:
        setMovie(0);
        break;
    }
  };

  const changeMovie = () => {
    if (movie === 200 || movie === 300) {
      setMovie(11);
      return;
    }

    setMovie(movie + 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <main
        className={`${styles.main} ${
          (movie === 36 || movie === 37) && styles.back
        } ${movie===35 && styles.back2} `}
      >
        {(movie === 36 || movie === 37) && (
          <Confetti width={width || 425} height={height || 814} />
        )}
        <>{getMovie(movie)}</>
{  movie !==37&&      <div className={styles.button}>
        <Button variant="contained" color="secondary" onClick={changeMovie}>
          Continuar
        </Button>
        </div>}
      </main>
    </ThemeProvider>
  );
}
