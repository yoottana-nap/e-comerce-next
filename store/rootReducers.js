import { combineReducers } from 'redux';
import { Navigationreducer } from '../components/Navigation/NavigationContainer';
import { Cartreducer } from '../components/ProductDetailComponent/AddToCartContainer';
import { UserReducer } from './usersReducer/UserReducer';
import { reducer as reduxFormReducer } from 'redux-form';
export const rootReducer = combineReducers({
    navigationreducer: Navigationreducer,
    cartreducer: Cartreducer,
    userReducer: UserReducer,
    form: reduxFormReducer

})
