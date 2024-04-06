import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {
  getGameDetails, getGameScreenShots, selectAllGameDetails,
} from '../redux/games/gamesSlice';
import GameScreenshots from '../components/GameScreenshots';
import GameRatings from '../components/GameRatings';

const GameDetailsPage = () => {
  const gameData = useSelector(selectAllGameDetails);
  const { gameId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGameDetails(gameId));
    dispatch(getGameScreenShots(gameId));
  }, [dispatch, gameId]);

  return (
    <section>
      <div className="flex flex-col gap-5 mx-10 pb-10">
        <div className="flex gap-10">
          <img src={gameData.background_image} alt={gameData.name} className="w-1/2 h-1/3 rounded-lg" />
          <div className="flex flex-wrap gap-5">
            <GameScreenshots />
          </div>
        </div>
        <div className="flex flex-col gap-5 w-3/4">
          <h2 className="text-white text-3xl font-bold">{gameData.name}</h2>
          <GameRatings gameData={gameData} />
          <div className="flex flex-wrap gap-10">
            <div className="w-64">
              <p className="text-gray font-bold">Platforms</p>
              <div className="flex flex-wrap">
                {
                  gameData.platforms && Object.entries(gameData.platforms).map(([key, platform]) => (
                    <p key={key} className="text-white">{platform.platform.name}</p>
                  ))
                }
              </div>
            </div>
            <div className="w-64">
              <p className="text-gray font-bold">Genre</p>
              {
                gameData.genres && Object.entries(gameData.genres).map(([key, genre]) => (
                  <p key={key} className="text-white">{genre.name}</p>
                ))
              }
            </div>
            <div className="w-64">
              <p className="text-gray font-bold">Release Date</p>
              <p className="text-white">{gameData.released}</p>
            </div>
            <div className="w-64">
              <p className="text-gray font-bold">Developers</p>
              {
                gameData.developers && Object.entries(gameData.developers).map(([key, developer]) => (
                  <p key={key} className="text-white">{developer.name}</p>
                ))
              }
            </div>
            <div className="w-64">
              <p className="text-gray font-bold">Publishers</p>
              {
                gameData.publishers && Object.entries(gameData.publishers).map(([key, publisher]) => (
                  <p key={key} className="text-white">{publisher.name}</p>
                ))
              }
            </div>
            <div className="w-64">
              <p className="text-gray font-bold">Website</p>
              <a href={gameData.website} className="text-white hover:underline">{gameData.website}</a>
            </div>
          </div>
          <p className="text-white text-md">{gameData.description_raw}</p>
        </div>
      </div>
    </section>
  );
};

export default GameDetailsPage;
