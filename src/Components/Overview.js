import React from 'react';
import { useSelector } from 'react-redux';
import { selectDisplay } from '../redux/slices/displayCountrySlice';
<<<<<<< HEAD
import LoadingModal from './LoadingModal';
=======
>>>>>>> 906b4647d58bd850eadb5cc9b69f1b37079cc487
import '../App.css';

const Overview = () => {
  const currentDisplay = useSelector(selectDisplay);
  return (
    <div className="stack">
      <h1>{currentDisplay.name.official}</h1>
      <h2>{currentDisplay.name.common}</h2>
      <table className="overview-table">
        <tbody>
        <tr>
          <td>Borders: </td>
          <td>
            {currentDisplay.borders
              ? currentDisplay.borders.map((e, i, arr) => {
                  if (i + 1 === arr.length) {
                    return `${e}`;
                  } else {
                    return `${e}`;
                  }
                })
              : 'N/A'}
          </td>
        </tr>
        <tr>
          <td>Population: </td>
          <td>{currentDisplay.population}</td>
        </tr>
        <tr>
          <td>Independent: </td>
          <td>{currentDisplay.independent ? 'true' : 'false'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Overview;
