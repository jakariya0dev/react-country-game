import { useState } from "react";
import CheckCircle from "./CheckCircle";

function GamePage({allCountry, setPage, setSummeryData}) {

    const [selectedOption, setSelectedOption] = useState(null)
    const [currentScore, setCurrentScore] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [selectedAns, setSelectedAns] = useState(null)
    const [options, setOptions] = useState([allCountry[0].name.common, allCountry[1].name.common, allCountry[2].name.common, allCountry[3].name.common].sort(() => Math.random() - 0.5))

    function handleOptionClick(opt, userSelectedAns) {
        setSelectedOption(opt)
        setSelectedAns(userSelectedAns)
        // console.log(allCountry);
    }

    function handleNextClick() {

        setSelectedOption(null)

        checkAns();

        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + 1;
            return newIndex; 
        });
            
        setOptions(() => {

            let newOptions = [allCountry[currentIndex].name.common, allCountry[currentIndex+1].name.common, allCountry[currentIndex+2].name.common, allCountry[currentIndex+3].name.common];
            newOptions = newOptions.sort(() => Math.random() - 0.5);
            
            return [...newOptions]
        });
        
    }

    function checkAns(){
        if (selectedAns == allCountry[currentIndex].name.common) {
            setCurrentScore(currentScore+1);
        }
    }

    function setBestScore() {
        
        if(currentScore > parseInt(localStorage.getItem('best-score'))){
            localStorage.setItem('best-score', currentScore)
        }

    }

    function handleEndButton() {
        setBestScore();
        setPage('summery-page')
        setSummeryData({currentScore: currentScore, answeredQues: currentIndex})
    }

    
    return(
        <div id="basic-game">
            <div className="container">
                <div className="header">
                    <img className="ques-flag" src={allCountry[currentIndex].flags.png} alt="Question flag" />
                    <div>
                        <table>
                            <tbody>
                                <tr style={{ "color" : "green" }}>
                                    <th>Best Score: </th>
                                    <td>{localStorage.getItem('best-score')}</td>
                                </tr>
                                <tr style={{ "color": "blue" }}>
                                    <th>Current Score: </th>
                                    <td> {currentScore} </td>
                                </tr>
                                <tr>
                                    <th>Questions: </th>
                                    <td>{currentIndex+1}/{allCountry.length}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p className="title">Guess which country's flag is this?</p>
                <div className="questions">
                    <ol>
                        <li onClick={ () => handleOptionClick(1, options[0])} className={selectedOption == 1 ? 'selected-opt' : 'unselected-opt'}><p> {options[0]} </p> {selectedOption == 1 ? <CheckCircle/> : ''}</li>
                        <li onClick={ () => handleOptionClick(2, options[1])} className={selectedOption == 2 ? 'selected-opt' : 'unselected-opt'}><p> {options[1]} </p> {selectedOption == 2 ? <CheckCircle/> : ''}</li>
                        <li onClick={ () => handleOptionClick(3, options[2])} className={selectedOption == 3 ? 'selected-opt' : 'unselected-opt'}><p> {options[2]} </p> {selectedOption == 3 ? <CheckCircle/> : ''}</li>
                        <li onClick={ () => handleOptionClick(4, options[3])} className={selectedOption == 4 ? 'selected-opt' : 'unselected-opt'}><p> {options[3]} </p> {selectedOption == 4 ? <CheckCircle/> : ''}</li>
                    </ol>
                </div>
                <div className="btn-group">
                    <button onClick={handleEndButton}>End Game</button>
                    <button onClick={handleNextClick}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default GamePage;