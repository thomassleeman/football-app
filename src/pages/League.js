import { React } from 'react';
import { useGlobalContext } from '../context';
import { useParams, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';
import Nav from '../components/Nav';
import LeagueComponent from '../components/LeagueComponent';
import { useFetch } from '../useFetch';

const League = () => {
  const { endPoints, loading, dispatch } = useGlobalContext();
  const { id } = useParams();

  // const location = useLocation();
  // dispatch({ type: 'LOCATION_UPDATE', payload: location });

  useFetch(endPoints.leagueID(id));

  switch (loading) {
    case true:
      return (
        <main>
          <Nav />
          <Loading />
        </main>
      );
    case false:
      return (
        <main>
          <Nav />
          <LeagueComponent />
        </main>
      );
    default:
      return <h1>Nothing rendered</h1>;
  }
};

export default League;
