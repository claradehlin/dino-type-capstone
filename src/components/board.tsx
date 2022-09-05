import React from 'react'
import '../stylesheets/Board.scss'
import Profiles from './profiles.js'


export default function Board() {

    const handleClick = (e: any) => {
        console.log(e.target)
    }
    
    return(
        <div className="board">
            <h1 className="leaderboard">Leaderboard</h1>

            <div className="duration">
            <button onClick={handleClick} data-id='7'>7 days</button>
            <button onClick={handleClick} data-id='30'>30 days</button>
            <button onClick={handleClick} data-id='0'>All-Time</button>
            </div>

            <Profiles></Profiles>

        </div>
    )
}
