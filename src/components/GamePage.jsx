import { useState } from "react";
import CheckCircle from "./CheckCircle";
import CloseCircle from "./CloseCircle";

function GamePage({allCountry, setPage, setSummeryData}) {

    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
    const [currentScore, setCurrentScore] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAns, setSelectedAns] = useState(null);
    const [options, setOptions] = useState([
        allCountry[0].name.common, 
        allCountry[1].name.common, 
        allCountry[2].name.common, 
        allCountry[3].name.common
    ].sort(() => Math.random() - 0.5));

    // console.log(allCountry[0]);
    // console.log(allCountry[currentIndex]);
    // console.log(allCountry);
    
    
    function handleOptionClick(opt, userSelectedAns) {

        setSelectedOptionIndex(opt)
        setSelectedAns(userSelectedAns)
    }

    function handleNextClick() {

        setSelectedOptionIndex(null);
        checkAns();
        setCurrentIndex(prevIndex => {
            const nextIndex = prevIndex + 1;
            setOptions(makeOptions(nextIndex)); // Use updated index
            return nextIndex;
        });
    }

    function makeOptions(index) {
    
        let opt1 = allCountry[index].name.common;
        let opts = new Set();
        while (opts.size < 3) {
            let num = Math.floor(Math.random() * (250 - 0 + 1)) + 0;
            if (num == index) {continue;}
            opts.add(allCountry[num].name.common);
        }
        opts = Array.from(opts);
        let newOptions = [opt1, ...opts];
        newOptions = newOptions.sort(() => Math.random() - 0.5);
        return newOptions;
    }

    function checkAns(){
        if (selectedAns == allCountry[currentIndex].name.common) {
            setCurrentScore(currentScore+1);
        }
    }

    function setBestScore() {
        
        if(currentScore > parseInt(localStorage.getItem('best-score'))){
            localStorage.setItem('best-score', currentScore);
        }

    }

    function handleEndButton() {
        setBestScore();
        setPage('summery-page');
        setSummeryData({currentScore: currentScore, answeredQues: currentIndex});
    }


    
    
    return(
        <div id="basic-game">
            <div className="container">
                <div className="header">
                    <img title={allCountry[currentIndex].name.common} className="ques-flag" src={allCountry[currentIndex].flags.png} alt="Question flag" />
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
                                    <td>{currentIndex}/{allCountry.length}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p className="title">Guess which country's flag is this?</p>
                <div className="questions">
                    <ol>
                        <li onClick={ () => handleOptionClick(1, options[0])} className={selectedOptionIndex == 1 ? 'selected-opt' : 'unselected-opt'}><p> {options[0]} </p> {selectedOptionIndex == 1 ? <CheckCircle/> : ''}</li>
                        <li onClick={ () => handleOptionClick(2, options[1])} className={selectedOptionIndex == 2 ? 'selected-opt' : 'unselected-opt'}><p> {options[1]} </p> {selectedOptionIndex == 2 ? <CheckCircle/> : ''}</li>
                        <li onClick={ () => handleOptionClick(3, options[2])} className={selectedOptionIndex == 3 ? 'selected-opt' : 'unselected-opt'}><p> {options[2]} </p> {selectedOptionIndex == 3 ? <CheckCircle/> : ''}</li>
                        <li onClick={ () => handleOptionClick(4, options[3])} className={selectedOptionIndex == 4 ? 'selected-opt' : 'unselected-opt'}><p> {options[3]} </p> {selectedOptionIndex == 4 ? <CheckCircle/> : ''}</li>
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