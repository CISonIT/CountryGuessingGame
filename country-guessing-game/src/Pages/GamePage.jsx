import { GameComponent } from "../Components/GameComponent.jsx";
import { GuessingList } from "../Components/GuessingList.jsx";

export const GamePage = () => {
    return (
        <main className="container d-flex align-items-center justify-content-center text-center h-100">
            <GameComponent />
            <GuessingList />
        </main>
    )
}