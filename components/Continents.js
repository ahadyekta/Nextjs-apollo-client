import Continent from "./Continent";


const Continents = ({ continents }) => {
    return (
    <div style={{color: 'blue'}}>
        {continents.map((continent) => {
            return (<div key={continent.code}><Continent  continent={continent}/></div>)
        })}
    </div>)
  }
  export default Continents;