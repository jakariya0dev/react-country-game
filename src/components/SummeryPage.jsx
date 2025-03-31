import React, { useState } from 'react';


const SummeryPage = ({setPage, summeryData}) => {

    const [bestScore, setBestScore] = useState(localStorage.getItem('best-score'))
    const [currentScore, setCurrentScore] = useState(summeryData.currentScore)
    const [answeredQues, setAnsweredQues] = useState(summeryData.answeredQues)
    
    function handleResetClick() {
        localStorage.setItem('best-score', '0')
        setBestScore(0)
        setCurrentScore(0)
        setAnsweredQues(0)
    }

    return ( 
        <section id="summery-page">
            <div className="summery-card">
                <table className="summery">
                    <tbody>
                        <tr>
                            <td> <h4>Best Score: </h4> </td>
                            <td> <h4>{bestScore}</h4> </td>
                        </tr>

                        <tr>
                            <td> <h4>Current Score: </h4> </td>
                            <td> <h4>{currentScore}</h4> </td>
                        </tr>

                        <tr>
                            <td> <h4>Answered Question: </h4> </td>
                            <td> <h4>{answeredQues}</h4> </td>
                        </tr>

                    </tbody>
                </table>
                <div className="btn-group">
                    <button onClick={() => setPage('home-page')}>Back Home</button>
                    <button onClick={handleResetClick}>Reset Score</button>
                    <button onClick={() => setPage('game-page')}>Play Game</button>
                </div>
            </div>
        </section>
     );
}
 
export default SummeryPage;