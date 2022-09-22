import { GameComponent } from "../Components/GameComponent.jsx";
import { GuessingList } from "../Components/GuessingList.jsx";

export const GamePage = () => {
    return (
        <main className="container d-flex text-center align-items-center justify-content-center bg-secondary vh-100 vw-100">
            <GameComponent />
            <GuessingList />
        </main>
    )
}