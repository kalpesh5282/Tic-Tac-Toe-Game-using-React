import { useState } from 'react';
import './Player.css';
function Player(props){

let[playerName, setPlayerName]=useState(props.Name)
let[isEditing, setIsEditing]=useState(false)

function handleChange(event){
setPlayerName(event.target.value);
}


function handleClick(){
    if(isEditing==true){
        props.setplayer(playerName)
        setIsEditing(false);
    }
    else{
        setIsEditing(true)
    }
}

function handlekey(event){
    if(event.key=="Enter"){
        props.setplayer(playerName)
        setIsEditing(false);
    }
}
let editablePlayerName = <span className="player-name"> {playerName}</span>

if(isEditing == true) {
    editablePlayerName  = 
        <input type="text"
          required 
        onChange={handleChange} 
        onKeyDown={handlekey}
        />
}


    return(
        <div className="player">
         

           {editablePlayerName}
            <span className='symbol'>{props.icon}</span>

            <button onClick={handleClick}>{isEditing?"Save" :"Edit"}</button>
        </div>
    );
}
export default Player;