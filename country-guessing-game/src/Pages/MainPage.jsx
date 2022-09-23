// END OF STYLING
// GET TO MAKE FUNCTIONALITY OF BUTTON 

import { useNavigate } from 'react-router-dom'

export const MainPage = () => {

    const navigate = useNavigate();

    const handleGamePageClick = () => {
        navigate('game-page')
    }

    return (
        <div id="main-image" className="bg-image shadow-2-strong">
            <div className="mask h-100" style={{backgroundColor: "rgba(0,0,0,0.4)"}}>
                <div className="container d-flex align-items-center justify-content-center text-center h-100">
                    <div className="text-white container">
                        <i className="bi bi-globe2 text-warning" style={{fontSize: "120px"}}></i>
                        <h1 className="mb-5">Country guesser</h1>
                        <button onClick={() => {handleGamePageClick()}} className="btn btn-outline-light btn-lg">Start game</button>
                    </div>
                </div>
            </div>
        </div>
    )
}