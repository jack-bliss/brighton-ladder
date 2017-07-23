var defaultState = {
    list: [],
    loading: false
}

const PlayersReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'LOADING_PLAYERS':
            return Object.assign({}, state, {
                loading: true
            });
        case 'LOADED_PLAYERS':
            return Object.assign({}, state, {
                loading: false,
                list: action.list
            });
        case 'ADD_PLAYER':
            return Object.assign({}, state, {
                list: state.list.concat([action.player])
            });
        default:
            return state;
    }
}

export default PlayersReducer;
