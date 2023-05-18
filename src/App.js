import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./components/main-page";
import { Intro } from "./components/intro";
import { File1 } from "./components/file1";
import { Forest } from "./components/forest";
import { Forest2 } from "./components/forest2";
import { SavingChoice } from "./components/savingChoice";
import { Map } from "./components/map";
import { MovingObject } from "./components/movingObject";
import { useEffect } from "react";


function handleScroll(event) {
  event.preventDefault();
}
function handleKeyDown(event) {
  const { key } = event;

  if ((key === "ArrowDown" || key === "ArrowUp" || key === "ArrowLeft" || key === "ArrowRight" || "spase")&& window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    event.preventDefault();
  }
}

function App() {  
  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
              <MainPage />
          }
        />
        <Route
          path="/savingChoice"
          element={
            <SavingChoice/>
          }
        />
        {/* <Route
        path="/startNewGame"
        element={
          <StartNewGame/>
        }
        /> */}
        <Route
          path="/movingObject"
          element={
              <MovingObject />
          }
        />
        <Route
          path="/intro"
          element={
              <Intro />
          }
        />
        <Route
          path="/forest"
          element={
              <Forest />
          }
        />
        <Route
          path="/forest2"
          element={
              <Forest2 />
          }
        />
        <Route
          path="/file1"
          element={
              <File1 />
          }
        />
        <Route
          path="/map"
          element={
            <Map />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
