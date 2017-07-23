import { connect } from 'react-redux';

import TextForm from '../visual/text-form/text-form.js';

import { AddPlayer } from '../../reducers/players/players-actions.js';
import PostJSON from '../../services/xhr/PostJSON.js';

const mapStateToProps = state => {
    return {
        placeholder: 'Tag'
    }
}

var tag = '';

const mapDispatchToProps = dispatch => {
    return {
        submit: function(e){
            e.preventDefault();
            PostJSON('/update/players/', {
                push: true,
                data: {
                    tag: tag,
                    inmatch: false
                }
            }).then(players => {
                dispatch(AddPlayer(players.pop()));
            });
            e.target.firstElementChild.value = '';
        },
        change: function(e){
            tag = e.target.value;
        }
    }
}

const RegisterPlayer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TextForm);

export default RegisterPlayer;
