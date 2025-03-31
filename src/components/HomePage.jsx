
function HomePage({setPage, setSummeryData}) {
    
    function handleExitClick() {
        window.open("", "_self");
        window.close();
    }

    function handleScoreClick(){
        setSummeryData({currentScore: 0, answeredQues: 0});
        setPage('summery-page');
    }

    return (
        <div id="home-page">
            <div className="container">
                <div className="game-bts-wrapper">
                    <button onClick={() => setPage('countries-page')} className="countries-btn">All Countries</button>
                    <button onClick={() => setPage('game-page')} className="game-btn">Play Game</button>
                    <button onClick={handleScoreClick} className="score-btn">Score Card</button>
                    <button onClick={handleExitClick} className="exit-btn">Exit</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage;