import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Header />
      <section className='flex'>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </section>
    </>
  );
}

export default App;
