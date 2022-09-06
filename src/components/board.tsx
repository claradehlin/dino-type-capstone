import axios from 'axios';
import React, {useState, useEffect} from 'react'
import '../stylesheets/Board.scss'
import Profiles from './profiles.js'

export default function Board() {

    const [scores, setScores] = useState([]);


    useEffect(() => {
        axios.get("https://dino-type.herokuapp.com/rank").then((res) => {
            setScores(res.data[0])
        })
    }, []);


    const handleClick = (e: any) => {
        console.log(e.target)
    }
    
    return(
        <div className="board">
            <h1 className="leaderboard">Leaderboard</h1>

            <div className="contain">
                {scores.map((score: any) => {
                    return (
                        <div key={score.id}>
                            <h4 className="rank">
                                WPM: {score.wpm}
                            </h4>
                        </div>
                    )
                })}
            </div>

            <Profiles></Profiles>

        </div>
    )
}
