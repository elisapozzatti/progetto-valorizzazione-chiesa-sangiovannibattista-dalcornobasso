import "./Homepage.css";
import { useState } from "react";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Cardhome from "./props/Cardhome.jsx";

function Homepage() {
  const [item, setItem] = useState("");
  return (
    <>
      <Header />
      <div>
        <h1 className="homepage-title">
          Tocca i punti sulla facciata per scoprire ogni elemento
        </h1>
        <div className="homepage-container-image" onClick={() => setItem("")}>
          <img src="chiesa-frontale.png" className="homepage-chiesa" />
          <h2
            className="homepage-hotspot coords1"
            onClick={(e) => {
              e.stopPropagation(); //blocca la propagazione del click al div genitore
              setItem("Elemento 1");
            }}
          >
            1
          </h2>
          {item == "Elemento 1" && (
            <Cardhome
              style={{ top: "30%", left: "47%" }}
              title="Timpano triangolare"
              description="Coronamento della facciata con cornici in Pietra d\'Avesa. La croce sommitale conclude verticalmente la composizione. La trabeazione con cornice aggettante separa questa zona dalla parte inferiore."
            />
          )}
          <h2
            className="homepage-hotspot coords2"
            onClick={(e) => {
              e.stopPropagation(); //blocca la propagazione del click al div genitore
              setItem("Elemento 2");
            }}
          >
            2
          </h2>
          {item == "Elemento 2" && (
            <Cardhome
              style={{ top: "38%", left: "55%" }}
              title="Finestra quadrilobata"
              description="Elemento di grande eleganza formale che richiama il Gotico veneziano. Quattro cerchi che si intersecano attorno a un fulcro centrale, con cornice modanata in pietra chiara. Unico nel suo genere nel contesto barocco della facciata."
            />
          )}
          <h2
            className="homepage-hotspot coords3"
            onClick={(e) => {
              e.stopPropagation(); //blocca la propagazione del click al div genitore
              setItem("Elemento 3");
            }}
          >
            3
          </h2>
          {item == "Elemento 3" && (
            <Cardhome
              style={{ top: "60%", left: "55%" }}
              title="Portale barocco"
              description="Il punto di maggiore concentrazione decorativa. Archetto con motivo a conchiglia (pettine o ventaglio) su timpano spezzato. Modanature in Pietra Gallina d\'Avesa, materiale calcareo estratto dalla Valle di Avesa a nord di Verona."
            />
          )}
          <h2
            className="homepage-hotspot coords4"
            onClick={(e) => {
              e.stopPropagation(); //blocca la propagazione del click al div genitore
              setItem("Elemento 4");
            }}
          >
            4
          </h2>
          {item == "Elemento 4" && (
            <Cardhome
              style={{ top: "75%", left: "42%" }}
              title="Lapidi commemorative"
              description="Due riquadri in Marmo Bianco di Carrara ai lati del portale, dedicate ai caduti delle guerre mondiali. Visibili corone di alloro con nastri tricolori italiani."
            />
          )}
          <h2
            className="homepage-hotspot coords5"
            onClick={(e) => {
              e.stopPropagation(); //blocca la propagazione del click al div genitore
              setItem("Elemento 5");
            }}
          >
            5
          </h2>
          {item == "Elemento 5" && (
            <Cardhome
              style={{ top: "30%", left: "61%" }}
              title="Lesene composite"
              description="Quattro lesene con capitelli di ordine composito suddividono verticalmente la facciata in tre campate. Funzione visiva e compositiva: campata centrale più ampia, laterali più strette."
            />
          )}
        </div>
        <p className="homepage-description">
          Tocca i numeri dorati per scoprire ogni elemento architettonico
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
