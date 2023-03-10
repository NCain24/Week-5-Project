import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectDisplay } from '../redux/slices/displayCountrySlice';
import {
  toggleLoading,
  setLoadingFalse,
  setLoadingTrue,
} from '../redux/slices/loadingSlice';
import { selectLoading } from '../redux/slices/loadingSlice';
import LoadingModal from './LoadingModal';

const Weather = () => {
  const [weather, setWeather] = useState();
  let display = useSelector(selectDisplay);
  let loading = useSelector(selectLoading);
  let latitude = display.capitalInfo.latlng[0];
  let longitude = display.capitalInfo.latlng[1];
  let dispatch = useDispatch();

  useEffect(() => {
    const axios = require('axios');

    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: { q: `${latitude}, ${longitude}` },
      headers: {
        'X-RapidAPI-Key': '53a918049cmsh8e38f944c6324d7p1c89bbjsn95950105a0d3',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setWeather(response.data);
        dispatch(setLoadingFalse());
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingModal />
      ) : (
        <table className="overview-table">
          <tbody>
            <tr>
              <td>Capital: </td>
              <td>{display.capital}</td>
            </tr>

            <tr>
              <td>Conditions: </td>
              <td>{weather?.current?.condition?.text}</td>
            </tr>
            <tr>
              <td>Temperature: </td>
              <td>{weather?.current?.temp_f} F*</td>
            </tr>
            <tr>
              <td>Feels Like: </td>
              <td>{weather?.current?.feelslike_f} F*</td>
            </tr>
            <tr>
              <td>Humidity: </td>
              <td>{weather?.current?.humidity}%</td>
            </tr>
            <tr>
              <td>Wind Speed: </td>
              <td>
                {weather?.current?.wind_mph} mph {weather?.current?.wind_dir}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Weather;
