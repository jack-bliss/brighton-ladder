import { combineReducers } from 'redux';

import PlayersReducer from './players/players-reducer.js';

export default combineReducers({
    Players: PlayersReducer
})
