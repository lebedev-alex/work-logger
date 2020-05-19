import {
  GET_WORKERS,
  ADD_WORKER,
  DELETE_WORKER,
  SET_LOADING,
  WORKERS_ERROR
} from './types';

export const setLoading = () => ({
  type: SET_LOADING
});

export const getWorkers = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/workers');
    const data = await res.json();

    dispatch({
      type: GET_WORKERS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: WORKERS_ERROR,
      payload: error.response.statusText
    });
  }
};

export const addWorker = worker => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/workers', {
      method: 'POST',
      body: JSON.stringify(worker),
      headers: {
        'Content-type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_WORKER,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: WORKERS_ERROR,
      payload: error.response.statusText
    });
  }
};

export const deleteWorker = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/workers/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_WORKER,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: WORKERS_ERROR,
      payload: error.response.statusText
    });
  }
};
