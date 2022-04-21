import { useGlobalContext } from '../context';

const LeagueComponent = () => {
  const { leagueData } = useGlobalContext();
  console.log(leagueData);

  // shuffle things about because of what is being returned by standings call by football api.
  const usefulData = leagueData[0];
  const dataLeague = usefulData.league;
  const standings = dataLeague.standings[0];

  return (
    <main>
      <table className="league-table">
        <title>
          <img src={dataLeague.logo} alt={dataLeague.name}></img>
          <h1>{dataLeague.name}</h1>
          <img
            className="leagues-flag"
            src={dataLeague.flag}
            alt={dataLeague.country}
          />
        </title>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th colSpan="4">Form</th>

          <th>Played</th>
          <th>Win</th>
          <th>Draw</th>
          <th>Lose</th>
          <th>For</th>
          <th>Against</th>
          <th>GD</th>
          <th>Points</th>
        </tr>
        {standings.map((item) => {
          const formArr = item.form.split('');
          const form1 = formArr[0];
          const form2 = formArr[1];
          const form3 = formArr[2];
          const form4 = formArr[3];

          const formCol = (result) => {
            let style = '';
            if (result === 'W') {
              style = '#00b894'; //green
            } else if (result === 'D') {
              style = '#b2bec3'; //grey
            } else if (result === 'L') {
              style = '#ff7675'; //red
            }
            return style;
          };

          return (
            <>
              <tr
                key={item.team.id}
                // onClick={() => call(endPoints.leagueID(item.league.id))}
                className="team"
              >
                <td>
                  <h2>{item.rank}</h2>
                </td>
                <td>
                  <img
                    className="team-logo"
                    src={item.team.logo}
                    alt={item.team.name}
                  ></img>
                </td>
                <td>
                  <h3 className="team-name">{item.team.name}</h3>
                </td>
                <td style={{ backgroundColor: formCol(form1) }}>{form1}</td>
                <td style={{ backgroundColor: formCol(form2) }}>{form2}</td>
                <td style={{ backgroundColor: formCol(form3) }}>{form3}</td>
                <td style={{ backgroundColor: formCol(form4) }}>{form4}</td>
                <td>{item.all.played}</td>
                <td>{item.all.win}</td>
                <td>{item.all.draw}</td>
                <td>{item.all.lose}</td>
                <td>{item.all.goals.for}</td>
                <td>{item.all.goals.against}</td>
                <td>{item.goalsDiff}</td>
                <td>{item.points}</td>
              </tr>
            </>
          );
        })}
      </table>
    </main>
  );
};

export default LeagueComponent;
