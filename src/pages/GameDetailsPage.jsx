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
                      <div key={key} className="flex gap-1 items-center">
                        <div className="w-3 h-3 rounded-full bg-green-600"></div>
                        <p className="text-gray text-base"><span className="text-white font-bold">{rating.title}</span> {rating.count}</p>
                      </div>
                    )
                  } else if (rating.title === "recommended") {
                    return (
                      <div key={key} className="flex gap-1 items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                        <p className="text-gray text-base"><span className="text-white font-bold">{rating.title}</span> {rating.count}</p>
                      </div>
                    )
                  } else if (rating.title === "meh") {
                    return (
                      <div key={key} className="flex gap-1 items-center">
                        <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
                        <p className="text-gray text-base"><span className="text-white font-bold">{rating.title}</span> {rating.count}</p>
                      </div>
                    )
                  } else {
                    return (
                      <div key={key} className="flex gap-1 items-center">
                        <div className="w-3 h-3 rounded-full bg-red-600"></div>
                        <p className="text-gray text-base"><span className="text-white font-bold">{rating.title}</span> {rating.count}</p>
                      </div>
                    )
                  }
                })
              }
            </div>
          </div>
          <div>
            <div>
              <p className="text-gray font-bold">Platforms</p>
              {
                gameData.platforms && Object.entries(gameData.platforms).map(([key, platform]) => (
                  <p key={key} className="text-white">{platform.platform.name},</p>
                ))
              }
            </div>
            <div>
              <p className="text-gray font-bold">Genre</p>
              {
                gameData.genres && Object.entries(gameData.genres).map(([key, genre]) => (
                  <p key={key} className="text-white">{genre.name}</p>
                ))
              }
            </div>
            <div>
              <p className="text-gray font-bold">Release Date</p>
              <p className="text-white">{gameData.released}</p>
            </div>
            <div>
              <p className="text-gray font-bold">Developers</p>
              {
                gameData.developers && Object.entries(gameData.developers).map(([key, developer]) => (
                  <p key={key} className="text-white">{developer.name}</p>
                ))
              }
            </div>
            <div>
              <p className="text-gray font-bold">Publishers</p>
              {
                gameData.publishers && Object.entries(gameData.publishers).map(([key, publisher]) => (
                  <p key={key} className="text-white">{publisher.name}</p>
                ))
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
