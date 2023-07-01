import data from "./data";
import '../App.css'

function Acto(props){
  return(
    <div className="Cards">
      <img src={props.url} className="img" alt=""/>
      <h5>{props.name}</h5>
      <h6>Awards : {props.awards}</h6>
      <h6>Achievements : {props.achieve}</h6>
      <a href={props.books} className="tag">➡️Books</a>
    </div>
  )
}

const a=data.map(b=>{
  return(
    <Acto
    {...b}
    />
  )
})

function Activ()
{
  return(
    <div>
      <h1 className="hbooks">ENVIRONMENTALISTS</h1>
    <div className="display">
      {a}
    </div>
    </div>
  )
}
  export default Activ;