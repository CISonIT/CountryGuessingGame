import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Styles/style.css';
import { MainPage } from "./Pages/MainPage";
import { GamePage } from "./Pages/GamePage"
import { NotFound } from "./Pages/NotFound.jsx"
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
      <main className="bg-secondary">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='game-page' element={<GamePage />}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </main>
  );
}

export default App;