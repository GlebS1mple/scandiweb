import { compose, combineReducers, createStore } from "redux";
import mainReducer from "./mainReducer";

//import { loadState, saveState } from './localStorage';



let reducers = combineReducers({
    main: mainReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /*persistedState,  preloadedState,*/ composeEnhancers(
    //applyMiddleware(thunkMiddleware)
));

window.__store__ = store;
export default store;