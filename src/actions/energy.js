import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_ENERGY, DELETE_ENERGY, ADD_ENERGY } from './types';

// GET ENERGY
export const getEnergy = () => (dispatch, getState) => {
    axios
    .get('/api/energy/', tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_ENERGY,
            payload: res.data
        });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE ENERGY
export const deleteEnergy = (id) => (dispatch, getState) => {
    axios
    .delete(`/api/energy/${id}/`, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ deleteEnergy: 'Energy Deleted' }));
        dispatch({
            type: DELETE_ENERGY,
            payload: id
        });
    })
    .catch(err => console.log(err));
};

// ADD ENERGY
export const addEnergy = (energy) => (dispatch, getState) => {
    axios
    .post('/api/energy/', energy, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ addEnergy: 'Energy Added' }));
        dispatch({
            type: ADD_ENERGY,
            payload: res.data
        });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};