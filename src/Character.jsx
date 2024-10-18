
export default function Character (props) {
 return(
    <div className="characters">
        <div className="character">
        <img 
        src={props.image} 
        alt={props.name} 
        onClick={props.onClick}/>
        <br />
        <h2><strong>{props.name}</strong></h2>
        </div>
    </div>
 )
}

