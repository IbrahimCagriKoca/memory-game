import React, { useState } from "react";

const EndGame = ({ onReset }) => {
    return (
        <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h1 style={{ fontSize: '2.5vw' }}>Congratulations</h1>
            <button onClick={onReset} style={{
                height: '8%',
                width: '25%',
                border: 'solid 2px #e1f5fe',
                backgroundColor: '#4fc3f7',
                borderRadius: '100vw',
                color: '#e1f5fe',
                fontSize: '1.5vw'
            }}>Restart</button>

        </div >
    )
}

export default EndGame;