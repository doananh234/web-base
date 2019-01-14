import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { auth } from './auth/reducer';
import { admin } from './admin/reducer';

export default history => combineReducers({
    router: connectRouter(history),
    auth,
    admin,
  });
