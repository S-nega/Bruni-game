import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./components/main-page";
import { Intro } from "./components/intro";
import { File1 } from "./components/file1";
import { Forest } from "./components/forest";
import { SavingChoice } from "./components/savingChoice";
import { Map } from "./components/map";
import { MovingObject } from "./components/movingObject";
import { useEffect } from "react";


function handleScroll(event) {
  event.preventDefault();
}
function handleKeyDown(event) {
  const { key } = event;

  if ((key === "ArrowDown" || key === "ArrowUp" || key === "ArrowLeft" || key === "ArrowRight")&& window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    event.preventDefault();
  }
}

function App() {
  const gameBlocks=['/intro', '/forest', '/cave', '/lake', '/swamp', '/rock', '/ice']
  
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
        {/* <Route
          path="/cave"
          element={
              <Cave />
          }
        /> */}
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
