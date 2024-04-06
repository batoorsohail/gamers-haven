import { useSelector } from 'react-redux';
import { selectAllGameScreenShots } from '../redux/games/gamesSlice';

const GameScreenshots = () => {
  const gameScreenShots = useSelector(selectAllGameScreenShots);

  return (
    <div className="flex flex-wrap gap-5">
      {gameScreenShots.map((gameScreenShot) => (
        <div key={gameScreenShot.gameId} className="w-56">
          <img src={gameScreenShot.gameScreenShot} alt="game play image" className="rounded-lg" />
        </div>
      ))}
    </div>
  );
};

export default GameScreenshots;
