export const GuessingList = () => {
    return (
        <div className="container h-80 d-flex algin-items-center justify-content-center flex-column bg-secondary display-6 text-light">
            <span className="mb-3">Guessed Countries :</span>
            <div className="fs-2 row row-cols-2 bg-secondary">
                {/* MAP of Countries (Guessed/NotGuessed) */}
                <div className="col">
                    <div className="">Template1</div>
                    <div className="">Template2</div>
                    <div className="">Template3</div>
                    <div className="">Template4</div>
                    <div className="">Template5</div>
                    <div className="">Template6</div>
                    <div className="">Template4</div>
                    <div className="">Template5</div>
                    <div className="">Template6</div>
                </div>
                <div className="col">
                    <div className="">Template1</div>
                    <div className="">Template2</div>
                    <div className="">Template3</div>
                    <div className="">Template4</div>
                    <div className="">Template5</div>
                    <div className="">Template6</div>
                    <div className="">Template1</div>
                    <div className="">Template2</div>
                    <div className="">Template3</div>
                    <div className="">Template4</div>
                    <div className="">Template5</div>
                    <div className="">Template6</div>
                </div>
            </div>
            <div className="mt-3 w-100 d-flex justify-content-evenly button-group">
                <button className="btn btn-dark btn-lg"> HINT? </button>
                <button className="btn btn-dark btn-lg">Reset</button>
                <button className="btn btn-dark btn-lg">Home</button>
            </div>
        </div>
    )
}