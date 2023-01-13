import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import { selectPotentials } from "./redux/slices/potentialCountriesSlice";
import { selectDisplay } from "./redux/slices/displayCountrySlice";
import { useSelector } from "react-redux";

function App() {
    const currentDisplay = useSelector( selectDisplay )
    console.log(currentDisplay)
    const potentials = useSelector( selectPotentials )
    console.log(potentials)
    return (
        <div className="App font-link">
            <Header />
            {currentDisplay ? <MainDisplay/> : <OptionDisplay/>}
        </div>
    );
}

export default App;
