
import './App.css';
import logo from './Imags/logo2.gif';
import './Components/Player'
import Player from './Components/Player';
import Board from './Components/Board';
import { useState } from 'react';

function App(){


  let[player1,setPlayer1]=useState("player1");
  let[player2,setPlayer2]=useState("player2");


    return(
        <div>
              <h1 className='game-heading'>Tic Tac Toe Game </h1>
              {/* <div className="img-container">
                <img src={logo} height="50px" width="50px" alt="logo"  />
              </div> */}
              <div className="main">
              <div className="game-container">
                <div className="player-section">
                  <Player icon="X" Name="Player 1" setplayer={setPlayer1}></Player>
                  <div className="vs"></div>
                  <Player icon="O" Name="Player 2" setplayer={setPlayer2}></Player>
                </div>
                <div className="game-section">
                  <Board player1={player1} player2={player2}/>
                </div>
              </div>
              </div>
        </div>
     
    );
}

export default App;