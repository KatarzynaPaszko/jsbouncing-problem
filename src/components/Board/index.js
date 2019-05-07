import React, { useState } from 'react';
import { board } from './board';


function Board() {
    const [boardTable, setBoardTable] = useState(board);
    // const [ballLocation, setBallLocation] = useState();

    const detectBallLocation = () => {
        for (let y = 0; y < boardTable.length; y++) {
            for (let x = 0; x < boardTable[y].length; x++) {
                if (boardTable[y][x] === "0") {
                    return [x, y];
                }
            }
        }
    }
    const location = detectBallLocation();
    console.log(location);


    const boardToRender = () => {
        const boardToDisplay = boardTable.map((row, index) => {
            let rowToDisplay = row.map((element, i) => <span key={i}> <pre> {element} </pre> </span >);
            rowToDisplay = <div key={index}>{rowToDisplay}</div>
            return rowToDisplay;
        });
        return boardToDisplay;
    }

    return (
        <div className="board">
            {boardToRender()}
        </div>
    );
}

export default Board;
