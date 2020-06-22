import React, { useState } from "react";

const generateCardGround = (e, changeVisibility, isClickDisabled, width) => {
    console.log(width)
    return (
        <div style={{
            width,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div onClick={() => {
                if (!isClickDisabled) {
                    changeVisibility(e)
                }
            }} style={{
                width: '100%',
                height: '100%',
                backgroundColor: "#ABD6DFFF",
                borderRadius: "0",
                border: 'solid 1px #E7EBE0FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3vm',
                opacity: !e.matched ? '100%' : '0',
            }} className="card-grounds"><span style={{
                visibility: (e.visibility || e.matched) ? 'visible' : 'hidden'
            }}>{e.text}</span></div>
        </div >
    )
}


const RenderCardGrounds = ({ randomElements, setter, children }) => {
    const isClickDisabled = randomElements.filter(x => x.visibility && !x.matched).length >= 2;
    const checkIsMatched = (randomElements) => {
        let visibleNotMatchedItems = randomElements.filter(x => x.visibility && !x.matched);

        if (visibleNotMatchedItems.length === 2) {
            console.log(visibleNotMatchedItems)
            if (visibleNotMatchedItems[0].text !== visibleNotMatchedItems[1].text) {
                randomElements[visibleNotMatchedItems[0].key].visibility = false;
                randomElements[visibleNotMatchedItems[1].key].visibility = false;

            } else {
                randomElements[visibleNotMatchedItems[0].key].matched = true;
                randomElements[visibleNotMatchedItems[1].key].matched = true;
            }
        }
    }
    const changeVisibility = (e) => {

        for (let i = 0; i < randomElements.length; i++) {
            if (randomElements[i].key === e.key) {
                randomElements[i].visibility = true;
            }
        }
        setter([...randomElements]);
        setTimeout(() => {
            checkIsMatched(randomElements);
            setter([...randomElements]);
        }, 1000);

    }
    const width = (100 / Math.sqrt(randomElements.length)) + '%';
    return (
        <div id="render-grounds" >

            {randomElements.map(e => generateCardGround(e, changeVisibility, isClickDisabled, width))}
            {children}
        </div>
    )
}

export default RenderCardGrounds;