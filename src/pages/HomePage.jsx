import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Games from '../components/Games';
import { getGames, selectAllGames } from '../redux/games/gamesSlice';

const HomePage = () => {
  const games = useSelector(selectAllGames);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  if (games.length === 0) {
    return (
      <section>
        <h2 className="text-white text-xl font-bold">Loading...</h2>
      </section>
    );
  }

  return (
    <main className="flex flex-col gap-4 pb-12">
      <h2 className="font-bold text-7xl text-white">All Games</h2>
      <div className="flex gap-5">
        <button type="button" className="bg-gray px-3 py-1 rounded-md text-white text-gray-hover slow-transition">
          Order by:
          <span className="font-bold">Popularity</span>
        </button>
        <button type="button" className="bg-gray px-3 py-1 rounded-md text-white text-gray-hover slow-transition">Release Date</button>
        <button type="button" className="bg-gray px-3 py-1 rounded-md text-white text-gray-hover slow-transition">Platforms</button>
      </div>
      <Games games={games}/>
    </main>
  );
};

export default HomePage;
