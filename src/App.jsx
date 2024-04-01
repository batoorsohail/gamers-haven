import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import GameDetailsPage from './pages/GameDetailsPage';

function App() {
  return (
    <>
      <Header />
      <section className="flex">
        <Navbar />
        <section>
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<GameDetailsPage />} path="/games/:gameId" />
          </Routes>
        </section>
      </section>
    </>
  );
}

export default App;
