import cities from '../cities.js';

const getCities = () => {
  return {
    type: 'GET_CITIES',
    payload: cities
  }
};

const getActiveCity = (city) => {
  return {
    type: 'SET_CITY',
    payload: city
  }
};
export default getActiveCity;
export default getCities;
