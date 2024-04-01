import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      <section className="flex flex-wrap gap-5">
        {games.map((game) => (
          <div key={game.gameId} className="lg:w-72 w-2/5 rounded-xl bg-gray shadow-lg">
            <Link to={`games/${game.gameId}`}>
              <img src={game.gameBg} alt={game.gameName} className="w-full rounded-xl" />
              <div className="flex flex-col gap-2 px-3 pb-5 pt-2">
                <h3 className="text-white text-xl font-bold">{game.gameName}</h3>
                <p className="flex justify-between text-gray">
                  Release Date:
                  <span className="text-white">{game.gameReleased}</span>
                </p>
                <p className="flex justify-between text-gray">
                  Game Ratings:
                  <span className="text-white">
                    {game.gameRating}
                    /5
                  </span>
                </p>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
};

export default HomePage;
