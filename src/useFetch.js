import { useEffect, useCallback } from 'react';
import { useGlobalContext } from './context';
import { useLocation } from 'react-router-dom';

export const useFetch = (newEndPoint) => {
  const { dispatch } = useGlobalContext();
  const location = useLocation().pathname;
  console.log(useLocation());
  // dispatch({ type: 'LOCATION_UPDATE', payload: location });

  const call = useCallback(
    async (newEndPoint) => {
      // dispatch({ type: 'LOADING' }); See README about this line which I have left in because it was breaking everything!
      const url = 'https://v3.football.api-sports.io/';
      const apiKey = 'cd468ab053988f03b9bc60aaaeef5efc';
      const init = { headers: { 'x-apisports-key': apiKey } };
      try {
        const response = await fetch(`${url}${newEndPoint}`, init);
        const responseJson = await response.json();

        //warning if api limit has been reached.
        if (responseJson.errors.length >= 1) {
          window.alert(responseJson.errors);
        }

        if (location.includes('league')) {
          console.log('fetch will update league');
          dispatch({
            type: 'LEAGUE_UPDATE',
            payload: responseJson.response,
          });
        } else {
          dispatch({
            type: 'LEAGUES_UPDATE',
            payload: responseJson.response,
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch, location]
  );

  useEffect(() => {
    call(newEndPoint);
  }, [newEndPoint, call]);
};
