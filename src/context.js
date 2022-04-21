import React, { useContext, useReducer } from 'react';
import reducer from './reducer';

const defaultState = {
  location: 'window.location.pathname',
  loading: true,
  leaguesData: [],
  leagueData: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const endPoints = {
    leagues: `leagues`,
    leagueID: (id) =>
      `standings?league=${id}&season=${new Date().getFullYear() - 1}`,
    teamID: `teams?id=`,
    leagueSearch: (search) => `leagues${search}`, //****looks wrong****
    teamSearch: (search) => `${search}`, //****looks wrong****
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        // locationB,
        endPoints,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
