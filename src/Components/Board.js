import Strike from "./Strike";
import Tile from "./Tile";

function Board({Tiles, ontileclick, Playerturn, strikeClass}){
    return (
        <div className="board" >
        <Tile Playerturn={Playerturn} onClick={()=> ontileclick(0)} value={Tiles[0]} className="right_border bottom_border"/>
        <Tile Playerturn={Playerturn} onClick ={()=> ontileclick(1)} value={Tiles[1]} className="right_border bottom_border"/>
        <Tile Playerturn={Playerturn} onClick ={()=> ontileclick(2)} value={Tiles[2]} className=" bottom_border"/>
        <Tile Playerturn={Playerturn} onClick ={()=> ontileclick(3)} value={Tiles[3]} className="right_border bottom_border"/>
        <Tile Playerturn={Playerturn} onClick ={()=> ontileclick(4)} value={Tiles[4]} className="right_border bottom_border"/>
        <Tile Playerturn={Playerturn} onClick ={()=> ontileclick(5)} value={Tiles[5]} className="bottom_border"/>
        <Tile Playerturn={Playerturn} onClick ={()=> ontileclick(6)} value={Tiles[6]} className="right_border "/>
        <Tile Playerturn={Playerturn} onClick ={()=> ontileclick(7)} value={Tiles[7]} className="right_border "/>
        <Tile Playerturn={Playerturn} onClick ={()=> ontileclick(8)} value={Tiles[8]} />

        <Strike strikeClass={strikeClass}/>
</div>
    );
}
export default Board;