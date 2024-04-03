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
        <img src={gameData.background_image} alt={gameData.name} className="bg-local" />
        <p className="text-white text-xl font-bold">Ratings:</p>
        <div className="flex gap-5">
          {
            gameData.ratings && Object.entries(gameData.ratings).map(([key, rating]) => (
            <div key={rating.key}>
              <p className="text-gray text-lg"><span className="text-white font-bold">{rating.title}</span> {rating.count}</p>
            </div>
            ))
          }
        </div>
        <div>
          <h2 className="text-white text-3xl font-bold">{gameData.name}</h2>
          <p className="text-white text-md">{gameData.description_raw}</p>
        </div>
      </div>
    </section>
  );
};

export default GameDetailsPage;
