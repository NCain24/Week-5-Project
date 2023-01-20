import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import LoadingModal from "./Components/LoadingModal";
import OptionDisplay from "./Components/OptionDisplay";
import { selectPotentials } from "./redux/slices/potentialCountriesSlice";
import { selectDisplay } from "./redux/slices/displayCountrySlice";
import { useSelector } from "react-redux";
import { selectLoading } from "./redux/slices/loadingSlice";

function App() {
    const currentDisplay = useSelector( selectDisplay )
    console.log( currentDisplay )
    let isLoading = useSelector(selectLoading)
    const potentials = useSelector( selectPotentials )
    console.log(potentials)
    return (
        <div className="App font-link">
            {isLoading && <LoadingModal/>}
            <Header />
            {currentDisplay ? <MainDisplay/> : <OptionDisplay/>}
        </div>
    );
}

export default App;
