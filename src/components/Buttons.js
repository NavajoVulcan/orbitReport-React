import satData from "./components/satData"
import {filterByType, setSat, displaySats} from "../App";


const Buttons = () => {
  const filterByType = props.filterByType;
  const setSat = props.setSat;
  const displaySats = props.displaySats;

  return (
    <div>
    {displaySats.map((sat, id) => {
      return (

        
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
      );
    })}

    <button onClick={() => setSat(satData)}>
     All Orbits </button>
  </div>
)};

export default Buttons;