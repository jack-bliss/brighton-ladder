import { connect } from 'react-redux';
import PlayerList from '../visual/player-list/player-list.js';

const mapStateToProps = state => {
    return {
        players: state.Players.list
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

const MainList = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerList);

export default MainList;
