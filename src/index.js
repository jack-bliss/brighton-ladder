import React from 'react';
import ReactDOM from 'react-dom';
import GetJSON from './services/xhr/GetJSON.js';
import PostJSON from './services/xhr/PostJSON.js';

import { createStore } from 'redux';
import Reducer from './reducers/reducers.js';

import { LoadingPlayers, LoadedPlayers } from './reducers/players/players-actions.js';

import { Provider } from 'react-redux';
import MainList from './components/functional/main-list.js';
import RegisterPlayer from './components/functional/register-player.js';

let Store = createStore(Reducer);

function LoadPlayers(){
    Store.dispatch(LoadingPlayers());
    GetJSON('/database/players/').then(players => {
        Store.dispatch(LoadedPlayers(players));
        console.log(Store.getState());
    })
}
LoadPlayers();
console.log(Store.getState());

ReactDOM.render(
    <div>
        <Provider store={Store}>
            <MainList />
        </Provider>
        <h3>Add Player:</h3>
        <Provider store={Store}>
            <RegisterPlayer />
        </Provider>
    </div>,
    document.getElementById('main')
);
