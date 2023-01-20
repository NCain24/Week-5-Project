import { useSelector } from 'react-redux';
import './App.css';
import Header from './Components/Header';
import MainDisplay from './Components/MainDisplay';
import LoadingModal from './Components/LoadingModal';
import OptionDisplay from './Components/OptionDisplay';
import { selectDisplay } from './redux/slices/displayCountrySlice';
import { selectLoading } from './redux/slices/loadingSlice';

function App() {
  const currentDisplay = useSelector(selectDisplay);
  const loading = useSelector(selectLoading);
  return (
    <div className="App font-link">
      <Header />
      {loading && <LoadingModal />}
      {currentDisplay ? <MainDisplay /> : <OptionDisplay />}
    </div>
  );
}

export default App;
