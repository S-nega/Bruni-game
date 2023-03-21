import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./components/main-page";
import { Display } from "./components/display";
import { StartNewGame } from "./components/startNewGame";
import { ContinueGame } from "./components/continueGame";
import { SavingChoice } from "./components/savingChoice";


function App() {
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
          path="/display"
          element={
              <Display />
          }
        />
        <Route
          path="/savingChoice"
          element={
            <SavingChoice/>
          }
        />
        <Route
        path="/startNewGame"
        element={
          <StartNewGame/>
        }
        />
        <Route
        path="/continueGame"
        element={
          <ContinueGame/>
        }
    />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
