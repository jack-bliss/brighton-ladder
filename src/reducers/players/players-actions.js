export const LoadingPlayers = () => {
    return {
        type: 'LOADING_PLAYERS'
    }
}

export const LoadedPlayers = (players) => {
    return {
        type: 'LOADED_PLAYERS',
        list: players
    }
}

export const AddPlayer = (player) => {
    return {
        type: 'ADD_PLAYER',
        player: player
    }
}
