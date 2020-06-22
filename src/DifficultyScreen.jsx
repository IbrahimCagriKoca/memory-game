import React from 'react';

const DifficultyScreen = ({ onSelectDifficulty }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            color: '#E7EBE0FF',
            alignItems: 'center',
            height: '100%'
        }}>
            <button className="difficulty-button" onClick={() => onSelectDifficulty("veryEasy")}>Very Easy (2x2)</button>
            <button className="difficulty-button" onClick={() => onSelectDifficulty("easy")}>Easy (4x4)</button>
            <button className="difficulty-button" onClick={() => onSelectDifficulty("medium")}>Medium (6x6)</button>
            <button className="difficulty-button" onClick={() => onSelectDifficulty("hard")}>Hard (8x8)</button>
            <button className="difficulty-button" onClick={() => onSelectDifficulty("extreme")}>Extreme (10x10)</button>
        </div>
    )
}

export default DifficultyScreen;