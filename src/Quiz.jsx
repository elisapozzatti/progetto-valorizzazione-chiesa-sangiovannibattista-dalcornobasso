import "./Quiz.css";
import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Requestsquiz from "./props/Requestsquiz.jsx";

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showNext, setShowNext] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswer = (answer) => {
    setSelected(answer);

    if (answer === questions[current].correct) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    setShowNext(true);
  };

  const questions = [
    {
      request:
        "In quale anno fu edificata la Chiesa di San Giovanni Battista al Corno Basso?",
      answers: ["1699", "1734-1735", "1762", "1806"],
      correct: "1734-1735",
      solution:
        "La chiesa fu costruita tra il 1734 e il 1735 per volontà di Giovanni Battista Campetti.",
    },
    {
      request: "Chi fu il committente della chiesa?",
      answers: [
        "Il Vescovo Giustiniani",
        "Don Domenico Simeoni",
        "Giovanni Battista Campetti",
        "La famiglia Benassuti",
      ],
      correct: "Giovanni Battista Campetti",
      solution:
        "Giovanni Battista Campetti era un facoltoso possidente che intendeva servire le esigenze spirituali della sua famiglia e dei contadini del Mantico.",
    },
    {
      request:
        "Quale pittore realizzò il ciclo pittorico originale della chiesa?",
      answers: [
        "Giovanni Battista Tiepolo",
        "Antonio Balestra",
        "Carlo Maratta",
        "Paolo Veronese",
      ],
      correct: "Antonio Balestra",
      solution:
        "Antonio Balestra (1666–1740), pittore veronese di primo piano e allievo di Carlo Maratta a Roma, realizzò le opere pittoriche della chiesa.",
    },
    {
      request:
        "Quale elemento architettonico nella finestra richiama il Gotico veneziano?",
      answers: [
        "L'arco a tutto sesto",
        "Il timpano spezzato",
        "La forma quadrilobata",
        "Le lesene composite",
      ],
      correct: "La forma quadrilobata",
      solution:
        "La finestra a quattro lobi (quadrilobata) è un elemento di ascendenza gotico-veneziana, inserito in un contesto barocco.",
    },
    {
      request: "In quale anno la chiesa fu chiusa definitivamente al culto?",
      answers: ["1936", "1959", "1968", "1984"],
      correct: "1968",
      solution:
        "La chiusura avvenne l'8 dicembre 1968, quando la nuova chiesa al Corno Alto fu completata e resa operativa.",
    },
    {
      request: "Di quale materiale lapideo è la cornice del portale?",
      answers: [
        "Marmo di Carrara",
        "Rosso Ammonitico Veronese",
        "Pietra Gallina d'Avesa",
        "Granito Rosa di Baveno",
      ],
      correct: "Pietra Gallina d'Avesa",
      solution:
        "La Pietra Gallina, estratta dalla Valle di Avesa a nord di Verona, è il materiale principale delle modanature e degli elementi decorativi della facciata.",
    },
  ];

  const progress = (current / questions.length) * 100;
  return (
    <div>
      <Header />
      <h1 className="quiz-title">Quanto conosci la chiesa?</h1>
      {current < questions.length ? (
        <div>
          <div className="quiz-line">
            <div
              className="quiz-line-fill"
              style={{
                width: `${progress}%`,
              }}
            ></div>
          </div>
          <Requestsquiz
            request={questions[current].request}
            answer1={questions[current].answers[0]}
            answer2={questions[current].answers[1]}
            answer3={questions[current].answers[2]}
            answer4={questions[current].answers[3]}
            onClick={handleAnswer}
            selected={selected}
            correct={questions[current].correct}
            isCorrect={isCorrect}
          />
        </div>
      ) : (
        <div className="quiz-result">
          <h1 className="quiz-score">
            {score} / {questions.length}
          </h1>
          <button
            className="quiz-button"
            onClick={() => {
              setCurrent(0);
              setScore(0);
              setSelected(null);
              setShowNext(false);
            }}
          >
            Ricomincia
          </button>
        </div>
      )}

      {showNext && current < questions.length && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 40px",
            borderRadius: "10px",
            padding: "10px",
            backgroundColor: isCorrect ? "lightgreen" : "#ff9999",
            border: isCorrect ? "2px solid green" : "2px solid red",
          }}
        >
          <p
            className="quiz-solution"
            style={{
              color: isCorrect ? "green" : "red",
            }}
          >
            {questions[current].solution}
          </p>
          <button
            className="quiz-button"
            onClick={() => {
              if (current === questions.length - 1) {
                setCurrent(current + 1);
              } else {
                setCurrent((prev) => prev + 1);
              }

              setSelected(null);
              setShowNext(false);
            }}
          >
            Domanda successiva
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Quiz;
