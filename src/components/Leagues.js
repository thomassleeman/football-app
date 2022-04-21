import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

const Leagues = () => {
  const { leaguesData, dispatch } = useGlobalContext();

  return (
    <main className="leagues">
      {leaguesData.map((item) => {
        const leagueSeasonsArrLength = item.seasons.length;
        if (item.seasons[leagueSeasonsArrLength - 1].coverage.standings) {
          return (
            <Link
              onClick={() =>
                dispatch({
                  type: 'LOCATION_UPDATE',
                  payload: `/league/${item.league.id}`,
                })
              }
              key={item.league.id}
              to={`/league/${item.league.id}`}
            >
              <article className="league-card">
                <h4 className="league-name">{item.league.name}</h4>

                <img
                  src={
                    item.country.flag ||
                    'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA='
                  }
                  alt={item.country.name}
                  className="leagues-flag"
                ></img>
                <img
                  src={item.league.logo}
                  alt={item.league.name}
                  className="leagues-logo"
                ></img>
              </article>
            </Link>
          );
        } else return null;
      })}
    </main>
  );
};

export default Leagues;
