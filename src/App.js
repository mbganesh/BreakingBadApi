import logo from './logo.svg';
import './App.css';
import { HashRouter, Route,  Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import CharacterPage from './Components/CharacterPage';
import DeathPage from './Components/DeathPage';
import EpisodePage from './Components/EpisodePage';
import QuotePage from './Components/QuotePage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/character' element={<CharacterPage/>} />
        <Route exact path='/death' element={<DeathPage/>} />
        <Route exact path='/episode' element={<EpisodePage/>} />
        <Route exact path='/death' element={<QuotePage/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
