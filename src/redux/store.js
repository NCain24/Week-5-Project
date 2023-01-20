import { configureStore } from "@reduxjs/toolkit";
import potentialCountriesReducer from './slices/potentialCountriesSlice'
import displayedCountryReducer from './slices/displayCountrySlice'
<<<<<<< HEAD
import isLoadingReducer from './slices/loadingSlice'
=======
>>>>>>> 906b4647d58bd850eadb5cc9b69f1b37079cc487

export default configureStore( {
    reducer: {
        potentialCountries: potentialCountriesReducer,
<<<<<<< HEAD
        displayedCountry: displayedCountryReducer,
        isLoading: isLoadingReducer
=======
        displayedCountry: displayedCountryReducer
>>>>>>> 906b4647d58bd850eadb5cc9b69f1b37079cc487
    },
})