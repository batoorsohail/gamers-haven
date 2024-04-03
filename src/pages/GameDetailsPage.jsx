import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getGameDetails } from "../redux/games/gamesSlice"
import { selectAllGameDetails } from "../redux/games/gamesSlice"
import { useEffect } from "react"

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
      <img src={gameData.background_image} alt={gameData.name} className="bg-local" />
      <div>
        <h2 className="text-white text-3xl font-bold">{gameData.name}</h2>
        <p className="text-white text-md">{gameData.description_raw}</p>
      </div>
    </section>
  )
}

export default GameDetailsPage

// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { getGameDetails } from "../redux/games/gamesSlice";
// import { selectAllGameDetails } from "../redux/games/gamesSlice";
// import { useEffect } from "react";

// const GameDetailsPage = () => {
//   const gameData = useSelector(selectAllGameDetails);
//   const { gameId } = useParams();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getGameDetails(gameId)); // Pass gameId to the action creator
//   }, [dispatch, gameId]);

//   console.log("gameData:", gameData); // Log gameData to check the Redux state

//   const gameDetails = gameData.find((game) => game.gameId == gameId);

//   console.log("gameDetails:", gameDetails); // Log gameDetails to check if it's defined

//   if (!gameDetails) {
//     return <div>Loading...</div>; // Return loading indicator if gameDetails is undefined
//   }

//   return (
//     <section>
//       <img src={gameDetails.gameDetailBg} alt={gameDetails.gameDetailName} className="bg-local" />
//       <div>
//         <h2 className="text-white text-3xl font-bold">{gameDetails.gameDetailName}</h2>
//         <p className="text-white text-3xl font-bold">{gameDetails.gameDescription}</p>
//       </div>
//     </section>
//   );
// };

// export default GameDetailsPage;
