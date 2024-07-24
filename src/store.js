import { createStore, combineReducers, applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
// import {composeWithDevTools} from 'redux-devtools-extension'
import { productDetailsReducers, productsListReducers } from './reducers/productsReducer'

const reducer = combineReducers({
    productsList: productsListReducers,
    productDetails: productDetailsReducers
})

const initialState = {}
const middleware =[thunk]
// const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store;