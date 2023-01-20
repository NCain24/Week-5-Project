import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import LoadingModal from "./Components/LoadingModal";
import OptionDisplay from "./Components/OptionDisplay";

function App() {
    return (
        <div className="App font-link">
            {isLoading && <LoadingModal/>}
            <Header />
            {currentDisplay ? <MainDisplay/> : <OptionDisplay/>}
        </div>
    );
}

export default App;
