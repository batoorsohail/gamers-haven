import { useDispatch, useSelector } from "react-redux";
import { getGames, selectAllGames } from "../redux/games/gamesSlice";
import { useEffect } from "react";

const HomePage = () => {
  const games = useSelector(selectAllGames);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  return (
    <section className="flex flex-col gap-4 h-[80vh]">
      <h2 className="font-bold text-7xl text-white">All Games</h2>
      <div className="flex gap-5">
        <button type="button" className="bg-gray px-3 py-1 rounded-md text-white text-gray-hover slow-transition">
          Order by:
          <span className="font-bold">Popularity</span>
        </button>
        <button type="button" className="bg-gray px-3 py-1 rounded-md text-white text-gray-hover slow-transition">Release Date</button>
        <button type="button" className="bg-gray px-3 py-1 rounded-md text-white text-gray-hover slow-transition">Platforms</button>
      </div>
    </section>
  )
};

export default HomePage;
