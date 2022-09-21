import { GameComponent } from "../Components/GameComponent.jsx";
import { GuessingList } from "../Components/GuessingList.jsx";

export const GamePage = () => {
    return (
        <main className="container">
            <GameComponent />
            <GuessingList />
        </main>
    )
}