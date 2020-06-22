import React, { useState, useEffect } from "react";
import RenderCardGrounds from "./RenderCardGrounds";
import DifficultyScreen from "./DifficultyScreen";
import EndGame from "./EndGame";

const generateNumbers = (n) => {
    const x = Array.from(Array(n).keys()).map(a => a + 1);
    console.log(x);
    return (
        [...x, ...x]
    )
}

const numbers = {
    veryEasy: generateNumbers(2),
    easy: generateNumbers(8),
    medium: generateNumbers(18),
    hard: generateNumbers(32),
    extreme: generateNumbers(50)
}

const randomizeElements = (arr) => {
    return (
        [...arr].sort(() => 0.5 - Math.random())
    )
}

const MemoryGame = () => {
    const [randomElements, setRandomElements] = useState([]);
    const [difficulty, setDifficulty] = useState();
    const isGameEnded = randomElements.filter(x => !x.matched).length === 0;

    useEffect(() => {
        console.log(difficulty);
        if (difficulty) {
            console.log(numbers[difficulty]);
            setRandomElements(randomizeElements(numbers[difficulty]).map((e, index) => ({ key: index, text: e, visibility: false, matched: false })));
        }
    }, [difficulty]);
    return (
        <div style={{
            paddingLeft: '15%',
            paddingRight: '15%',
            width: '70%'
        }}>
            <h2 style={{ fontSize: '3vw', margin: !difficulty ? '10% 0 10% 0' : '3% 0 3% 0', color: '#4fc3f7' }}>Dinozor's Memory Game</h2>
            <div className='memory-game-wrapper'>

                <div className='memory-game-main'>
                    {!difficulty && <DifficultyScreen id="difficulty-screen" onSelectDifficulty={(selected) => {
                        console.log(selected);
                        setDifficulty(selected);
                    }} />}
                    {randomElements.length > 0 && <RenderCardGrounds randomElements={randomElements} setter={setRandomElements}>
                        {difficulty && isGameEnded && <EndGame onReset={() => {
                            setRandomElements([]);
                            setDifficulty(undefined);
                        }} />}
                    </RenderCardGrounds>}

                </div>
            </div>
        </div>
    )
}

export default MemoryGame