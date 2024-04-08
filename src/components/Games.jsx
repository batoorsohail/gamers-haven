import { Link } from 'react-router-dom';

const Games = ({games}) => {
  return (
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
  )
}

export default Games