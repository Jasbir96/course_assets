import thunk from 'redux-thunk'
import {applyMiddleware, createStore} from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './rootReducer'
const store = createStore(rootReducer
    ,composeWithDevTools(applyMiddleware(thunk)));
export default store;