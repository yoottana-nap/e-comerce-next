import { combineReducers } from 'redux';
import { Navigationreducer } from '../components/Navigation/NavigationContainer';
import { Cartreducer } from '../components/ProductDetailComponent/AddToCartContainer';
export const rootReducer = combineReducers({
    navigationreducer: Navigationreducer,
    cartreducer: Cartreducer
})
