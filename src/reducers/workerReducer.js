import {
  GET_WORKERS,
  ADD_WORKER,
  DELETE_WORKER,
  SET_LOADING,
  WORKERS_ERROR
} from '../actions/types';

const initialState = {
  workers: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WORKERS:
      return {
        ...state,
        workers: action.payload,
        loading: false
      };
    case ADD_WORKER:
      return {
        ...state,
        workers: [...state.workers, action.payload],
        loading: false
      };
    case DELETE_WORKER:
      return {
        ...state,
        workers: state.workers.filter(worker => worker.id !== action.payload),
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case WORKERS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
