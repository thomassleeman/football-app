const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };

    case 'LOCATION_UPDATE':
      console.log('Location update');
      return {
        ...state,
        location: action.payload,
        loading: true,
      };

    case 'LEAGUES_UPDATE':
      return {
        ...state,
        leaguesData: action.payload,
        loading: false,
      };

    case 'LEAGUE_UPDATE':
      console.log('League Update happened');
      return {
        ...state,
        leagueData: action.payload,
        loading: false,
      };

    default:
      return { ...state };
  }
};

export default reducer;
