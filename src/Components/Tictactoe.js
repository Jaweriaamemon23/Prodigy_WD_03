import Board from "./Board";
import { useState, useEffect } from "react";
import Gameover from "./Gameover";
import Gamestate from "./Gamestate";
import Reset from "./Reset";

const Player_X='X';
const Player_O='O';

const winningcombo=[
{ combo:[0,1,2] ,strikeClass:"strike-row-1"},

{combo:[3,4,5] ,strikeClass:"strike-row-2"},

{combo:[6,7,8] ,strikeClass:"strike-row-3"},

{ combo:[0,3,6] ,strikeClass:"strike-column-1"},

{combo:[1,4,7] ,strikeClass:"strike-column-2"},

{combo:[2,5,8] ,strikeClass:"strike-column-3"},


{ combo:[0,4,8] ,strikeClass:"strike-diagonal-1"},

{combo:[2,4,6] ,strikeClass:"strike-diagonal-2"}
]

function checkwinner(Tiles, setStrikeclass, setGamestate){
for (const {combo, strikeClass} of winningcombo){
const tilevalue1=Tiles[combo[0]]
const tilevalue2=Tiles[combo[1]]
const tilevalue3=Tiles[combo[2]]

if(tilevalue1!=null && tilevalue1==tilevalue2&& tilevalue1==tilevalue3){
    setStrikeclass(strikeClass);
    if(tilevalue1==Player_X){
        setGamestate(Gamestate.playerXwin);
    }
    else{
        setGamestate(Gamestate.playerOwin);
    }
    return;
}
}
const arealltilesfilled= Tiles.every((Tiles)=> Tiles!==null);
if(arealltilesfilled){
    setGamestate(Gamestate.draw)
}


}

function Tictactoe(){
    const [Tiles, setTiles]=useState(Array(9).fill(null));
    const [Playerturn, setPlayerturn]=useState(Player_X);
    const [strikeClass, setStrikeclass]=useState()
    const [gamestate, setGamestate]=useState(Gamestate.inprogress)
    const handletileclick = (index) => {
      if(gamestate !== Gamestate.inprogress){
        return;
      }

        if(Tiles[index]!=null){
            return;
        }
        const newTile=[...Tiles];
        newTile[index]=Playerturn;
        setTiles(newTile);
        if(Playerturn==Player_X){
            setPlayerturn(Player_O);
        }
        else{
            setPlayerturn(Player_X);
        }
        };

    const handlereset = ()=>{
    setGamestate(Gamestate.inprogress);
    setTiles(Array(9).fill(null));
    setPlayerturn(Player_X);
    setStrikeclass(null);
    };

    useEffect(()=> {
        checkwinner(Tiles, setStrikeclass, setGamestate)} ,[Tiles]
    ) ; 
    return (

    <div>
        <h1>Tic Tac Toe Game</h1>
        <br></br>
<Board Playerturn={Playerturn}
 Tiles={Tiles} 
 ontileclick={handletileclick}
 strikeClass={strikeClass}/>
 <Gameover gamestate={gamestate}/>
 <Reset gamestate={gamestate} onreset={handlereset}/>
</div>
    );
}
export default Tictactoe;