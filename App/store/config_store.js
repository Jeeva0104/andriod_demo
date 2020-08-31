import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userAccounts } from './reducers/accounts_reducer';
import { errorHandler } from './reducers/error_reducer'
import { Loading } from './reducers/loading_reducer'
const rootReducer = combineReducers({
    userAccounts,
    errorHandler,
    Loading
});
let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const configStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configStore;