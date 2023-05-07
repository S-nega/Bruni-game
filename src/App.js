import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./components/main-page";
import { Intro } from "./components/intro";
import { File1 } from "./components/file1";
import { Forest } from "./components/forest";
import { SavingChoice } from "./components/savingChoice";
import { Map } from "./components/map";
import { MovingObject } from "./components/movingObject";


function App() {
  const gameBlocks=['/intro', '/forest', '/cave', '/lake', '/swamp', '/rock', '/ice']

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
