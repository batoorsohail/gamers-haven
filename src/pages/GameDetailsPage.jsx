import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getGameDetails, selectAllGameDetails } from '../redux/games/gamesSlice';

const GameDetailsPage = () => {
  const gameData = useSelector(selectAllGameDetails);
  const { gameId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGameDetails(gameId));
  }, [dispatch, gameId]);

  return (
    <section>
      <div className="flex flex-col gap-5 w-3/4 mx-10 pb-10">
        <img src={gameData.background_image} alt={gameData.name} className="rounded-lg" />
        <div className="flex flex-col gap-5">
          <h2 className="text-white text-3xl font-bold">{gameData.name}</h2>
          <div>
            <p className="text-white text-xl font-bold">Ratings:</p>
            <div className="flex gap-5">
              {
                gameData.ratings && Object.entries(gameData.ratings).map(([key, rating]) => {
                  if (rating.title === "exceptional") {
                    return (
                      <div key={rating.key} className="flex gap-1 items-center">
                        <div className="w-3 h-3 rounded-full bg-green-600"></div>
                        <p className="text-gray text-base"><span className="text-white font-bold">{rating.title}</span> {rating.count}</p>
                      </div>
                    )
                  } else if (rating.title === "recommended") {
                    return (
                      <div key={rating.key} className="flex gap-1 items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                        <p className="text-gray text-base"><span className="text-white font-bold">{rating.title}</span> {rating.count}</p>
                      </div>
                    )
                  } else if (rating.title === "meh") {
                    return (
                      <div key={rating.key} className="flex gap-1 items-center">
                        <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
                        <p className="text-gray text-base"><span className="text-white font-bold">{rating.title}</span> {rating.count}</p>
                      </div>
                    )
                  } else {
                    return (
                      <div key={rating.key} className="flex gap-1 items-center">
                        <div className="w-3 h-3 rounded-full bg-red-600"></div>
                        <p className="text-gray text-base"><span className="text-white font-bold">{rating.title}</span> {rating.count}</p>
                      </div>
                    )
                  }
                })
              }
            </div>
          </div>
          <p className="text-white text-md">{gameData.description_raw}</p>
        </div>
      </div>
    </section>
  );
};

export default GameDetailsPage;
