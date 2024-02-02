import Gamestate from "./Gamestate";
 
function Gameover({gamestate}) {
switch(gamestate){
    case Gamestate.inprogress:
        return<></> ;
    case Gamestate.playerOwin:
        return <div className='game-over'>O Win!</div>;
    case Gamestate.playerXwin:
        return <div className='game-over'>X Win!</div>
        case Gamestate.draw:
            return <div className='game-over'>Draw Game!</div>    
        default:
        return <></>
}

}

export default Gameover;