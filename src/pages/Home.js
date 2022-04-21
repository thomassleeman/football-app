import { React } from 'react';
import { useGlobalContext } from '../context';
import Nav from '../components/Nav';
import Search from '../components/Search';
import Loading from '../components/Loading';
import Leagues from '../components/Leagues';
import { useFetch } from '../useFetch';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const { loading, dispatch } = useGlobalContext();

  // const location = useLocation();
  // dispatch({ type: 'LOCATION_UPDATE', payload: location });

  useFetch('leagues');

  switch (loading) {
    case true:
      return (
        <main>
          <Nav />
          <Search />
          <Loading />
        </main>
      );
    case false:
      return (
        <main>
          <Nav />
          <Search />
          <Leagues />
        </main>
      );
    default:
      return <h1>Nothing rendered</h1>;
  }
};

export default Home;
