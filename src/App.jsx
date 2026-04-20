import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage.jsx";
import Vista3d from "./Vista3d.jsx";
import Storia from "./Storia.jsx";
import Quiz from "./Quiz.jsx";
import Abbina from "./Abbina.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/vista3d" element={<Vista3d />} />
        <Route path="/storia" element={<Storia />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/abbina" element={<Abbina />} />
      </Routes>
    </>
  );
}

export default App;
