
export default function ScoreBoard ({CurrentScore, BestScore}) {
   
    return (
        <>
            <div className="scores">
                <h1 className="current-score">Score: {CurrentScore}</h1>
                <h1 className="best-score">Best Score: {BestScore}</h1>
            </div>
        </>
    )
}