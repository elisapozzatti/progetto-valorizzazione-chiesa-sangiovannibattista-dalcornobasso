import "./Storia.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Storyline from "./props/Storyline.jsx";
import { useState } from "react";

function Storia() {
  const [event, setEvent] = useState("");
  return (
    <div>
      <Header />
      <h1 className="storia-title">
        Linea del tempo - tocca ogni evento per espandere
      </h1>
      <div className="storia-container">
        <Storyline
          year="1732"
          description="La supplica al vescovo"
          isOpen={event === "1732"}
          onClick={() => setEvent("1732")}
        />
        {event == "1732" && (
          <p className="storia-description">
            Giovanni Battista Campetti espone al vescovo la difficoltà dei
            contadini del Mantico di raggiungere la parrocchiale in caso di
            maltempo. Chiede il permesso di edificare un oratorio privato.
          </p>
        )}
        <Storyline
          year="1734-1735"
          description="Costruzione della chiesa"
          isOpen={event === "1734-1735"}
          onClick={() => setEvent("1734-1735")}
        />
        {event == "1734-1735" && (
          <p className="storia-description">
            Per volontà di Giovanni Battista Campetti, facoltoso possidente
            locale, viene edificato l'oratorio. Architettura tipica del primo
            Settecento veneto, con facciata a capanna e lesene composite.
          </p>
        )}
        <Storyline
          year="1762"
          description="Visita del vescovo Giustiniani"
          isOpen={event === "1762"}
          onClick={() => setEvent("1762")}
        />
        {event == "1762" && (
          <p className="storia-description">
            Il vescovo Nicolò Antonio Giustiniani visita e loda la chiesa per la
            magnificenza e per il ciclo pittorico commissionato ad Antonio
            Balestra (1666–1740), pittore veronese allievo di Carlo Maratta a
            Roma.
          </p>
        )}
        <Storyline
          year="1806"
          description="Decreto napoleonico di soppressione"
          isOpen={event === "1806"}
          onClick={() => setEvent("1806")}
        />
        {event == "1806" && (
          <p className="storia-description">
            Il viceré Eugenio di Beauharnais ordina la soppressione di tutte le
            chiese non parrocchiali. La chiesa del Corno, essendo privata, viene
            incamerata dal Demanio e venduta.
          </p>
        )}
        <Storyline
          year="1837"
          description="Passaggio alla famiglia Benassuti"
          isOpen={event === "1837"}
          onClick={() => setEvent("1837")}
        />
        {event == "1837" && (
          <p className="storia-description">
            La famiglia Benassuti acquista la proprietà. Solo nel 1876 affiderà
            l'uso gratuito della canonica a don Giuseppe Montresor, sacerdote
            designato dal vescovo Luigi Canossa.
          </p>
        )}
        <Storyline
          year="1936"
          description="Cessione alla Diocesi di Verona"
          isOpen={event === "1936"}
          onClick={() => setEvent("1936")}
        />
        {event == "1936" && (
          <p className="storia-description">
            La chiesa viene ceduta alla Diocesi di Verona. Nel 1959 è eretta in
            Parrocchia dal vescovo Giuseppe Carraro.
          </p>
        )}
        <Storyline
          year="1968"
          description="Chiusura al culto"
          isOpen={event === "1968"}
          onClick={() => setEvent("1968")}
        />
        {event == "1968" && (
          <p className="storia-description">
            La nuova chiesa di San Giovanni Battista al Corno Alto (costruita
            1967–71) sostituisce quella al Corno Basso, che viene chiusa al
            culto l'8 dicembre 1968.
          </p>
        )}
        <Storyline
          year="1984-1985"
          description="Crollo e primo restauro"
          isOpen={event === "1984-1985"}
          onClick={() => setEvent("1984-1985")}
        />
        {event == "1984-1985" && (
          <p className="storia-description">
            Il tetto crolla nel 1984. La Soprintendenza di Verona interviene nel
            1985 con un restauro parziale. La volta del coro in canniccio resta
            fortunosamente illesa.
          </p>
        )}
        <Storyline
          year="2025"
          description="Progetto di restauro conservativo"
          isOpen={event === "2025"}
          onClick={() => setEvent("2025")}
        />
        {event == "2025" && (
          <p className="storia-description">
            Avvio del progetto di restauro conservativo della facciata,
            nell'ambito del Corso Triennale per Tecnico del Restauro di Beni
            Culturali dell'Istituto Salesiano San Zeno di Verona.
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Storia;
