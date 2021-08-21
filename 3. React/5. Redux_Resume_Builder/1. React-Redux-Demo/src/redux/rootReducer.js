import {combineReducers} from 'redux';
import batReducer from './bats/batReducer';
import ballReducer from './balls/ballReducer';
import userReducer from './user/userReducer';
 const rootReducer = combineReducers(
    {
    bat: batReducer,
    ball:ballReducer,
    user:userReducer
    }
)
export default rootReducer;