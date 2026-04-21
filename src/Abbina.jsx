import "./Abbina.css";
import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function Abbina() {
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [matched, setMatched] = useState([]);
  const [error, setError] = useState(null);
  const [random, setRandom] = useState([]);

  const HandleTermClick = (item) => {
    if (matched.includes(item.termine)) return;
    setSelectedTerm(item);
  };

  const HandleDefClick = (item) => {
    if (!selectedTerm) return;

    if (item.definizione === selectedTerm.definizione) {
      setMatched([...matched, selectedTerm.termine]);
      setSelectedTerm(null);
    } else {
      setError(selectedTerm.termine);
      setTimeout(() => {
        setError(null);
        setSelectedTerm(null);
      }, 500);
    }
  };

  const abbinaItems = [
    {
      termine: "Lesena",
      definizione:
        "Pilastro piatto addossato alla parete con funzione visiva di ritmo",
    },
    {
      termine: "Biocida",
      definizione:
        "Forma a quattro lobi sovrapposti, di ascendenza gotico-veneziana",
    },
    {
      termine: "Pietra Gallina",
      definizione:
        "Calcare nummulitico estratto dalla Valle di Avesa, tenero e lavorabile",
    },
    {
      termine: "Timpano",
      definizione:
        "Prodotto chimico ad ampio spettro usato per eliminare la colonizzazione biologica",
    },
    {
      termine: "Ammonitico",
      definizione:
        "Elemento triangolare di coronamento sommitale della facciata",
    },
    {
      termine: "Quadrilobo",
      definizione:
        "Calcare nodulare rossastro tipico del Veronese, ricco di fossili",
    },
  ];

  const RandomArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setRandom(RandomArray(abbinaItems));
  }, []);

  return (
    <div>
      <Header />
      <h1 className="abbina-title">Abbina ogni termine alla sua definizione</h1>
      <div className="abbina-container">
        <div className="abbina-columns">
          <h2 className="abbina-subtitles">TERMINE</h2>
          <div className="abbina-termine-container">
            {abbinaItems.map((item, index) => {
              const isMatched = matched.includes(item.termine);
              const isError = error === item.termine;
              const isSelected = selectedTerm?.termine === item.termine;
              return (
                <h3
                  key={index}
                  className="abbina-items"
                  onClick={() => HandleTermClick(item)}
                  style={{
                    backgroundColor: isMatched
                      ? "lightgreen"
                      : isError
                        ? "#ff9999"
                        : isSelected
                          ? "#a08060"
                          : "#c8b89a",
                    borderColor: isMatched
                      ? "green"
                      : isError
                        ? "red"
                        : "#a08060",
                  }}
                >
                  {item.termine}
                </h3>
              );
            })}
          </div>
        </div>
        <div className="abbina-columns">
          <h2 className="abbina-subtitles">DEFINIZIONE</h2>
          <div className="abbina-definizione-container">
            {random.map((item, index) => {
              const isMatched = matched.includes(item.termine);
              return (
                <h3
                  key={index}
                  className="abbina-items"
                  onClick={() => HandleDefClick(item)}
                  style={{
                    backgroundColor: isMatched ? "lightgreen" : "#c8b89a",
                    borderColor: isMatched ? "green" : "#a08060",
                  }}
                >
                  {item.definizione}
                </h3>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Abbina;
