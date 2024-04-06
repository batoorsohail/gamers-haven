const GameRatings = ({ gameData }) => (
  <section>
    <p className="text-white text-xl font-bold">Ratings:</p>
    <div className="flex gap-5">
      {
        gameData.ratings && Object.entries(gameData.ratings).map(([key, rating]) => {
          if (rating.title === 'exceptional') {
            return (
              <div key={key} className="flex gap-1 items-center">
                <div className="w-3 h-3 rounded-full bg-green-600" />
                <p className="text-gray text-base">
                  <span className="text-white font-bold">{rating.title}</span>
                  {' '}
                  {rating.count}
                </p>
              </div>
            );
          } if (rating.title === 'recommended') {
            return (
              <div key={key} className="flex gap-1 items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600" />
                <p className="text-gray text-base">
                  <span className="text-white font-bold">{rating.title}</span>
                  {' '}
                  {rating.count}
                </p>
              </div>
            );
          } if (rating.title === 'meh') {
            return (
              <div key={key} className="flex gap-1 items-center">
                <div className="w-3 h-3 rounded-full bg-yellow-600" />
                <p className="text-gray text-base">
                  <span className="text-white font-bold">{rating.title}</span>
                  {' '}
                  {rating.count}
                </p>
              </div>
            );
          }
          return (
            <div key={key} className="flex gap-1 items-center">
              <div className="w-3 h-3 rounded-full bg-red-600" />
              <p className="text-gray text-base">
                <span className="text-white font-bold">{rating.title}</span>
                {' '}
                {rating.count}
              </p>
            </div>
          );
        })
      }
    </div>
  </section>
);

export default GameRatings;
