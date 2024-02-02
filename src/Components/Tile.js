function Tile({ className, value, onClick, Playerturn }) {
    let hoverclass = null;
  
    if (value == null && Playerturn != null) {
      hoverclass = `${Playerturn.toLowerCase()}-hover`;
    }
  
    return (
      <div onClick={onClick} className={`Tiles ${className} ${hoverclass}`}>
        {value}
      </div>
    );
  }
  
  export default Tile;
  