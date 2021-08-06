import React, {useState} from 'react'
import {Link} from 'react-router-dom';

import './Home.css'

const Home = () => {
    const [name, setName] = useState("")
    const [room, setRoom] = useState("")
    return(
        <div className="joinOuterContainer">
            <div className="leftContainer">
            </div>
            <div className="rightContainer">
                <h1 className="heading">Welcome to Chat App</h1>
                <div ><input type="text" placeholder="Name" className="joinInput" onChange={(e) => setName(e.target.value)} /></div>
                <div ><input type="text" placeholder="Room" className="joinInput mt-20" onChange={(e) => setRoom(e.target.value)} /></div>
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Sign in</button>
                </Link>
            </div>
        </div>
    )
}

export default Home