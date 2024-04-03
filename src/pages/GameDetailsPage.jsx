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

  console.log(gameData);

  return (
    <section>
      <div className="flex flex-col w-3/5">
        <img src={gameData.background_image} alt={gameData.name} className="bg-local" />
        {
          gameData.ratings.map((rating) => {
           <p className="text-gray"><span className="text-white font-bold">{rating.title}</span> {rating.count}</p>
          })
        }
        <div>
          <h2 className="text-white text-3xl font-bold">{gameData.name}</h2>
          <p className="text-white text-md">{gameData.description_raw}</p>
        </div>
      </div>
    </section>
  );
};

export default GameDetailsPage;
