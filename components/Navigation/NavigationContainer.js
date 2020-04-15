import { connect } from 'react-redux';
import Navigation from './Navigation';

const navigationAction = {
    TOGGLE_CLICK_NAVBAR: "TOGGLE_CLICK_NAVBAR"
}
const navigationItems = [
    { keyTitle: "home", routePath: "/index" },
    { keyTitle: "category", routePath: "/incorporation" },
    { keyTitle: "signup", routePath: "/signin" },
    { keyTitle: "singin", routePath: "/signin" },
    { keyTitle: "cart", routePath: "/signin" },
    { keyTitle: "order", routePath: "/signin" }
];

let toggleNavbar = false;

export const initialState = {
    navigationItems: navigationItems,
    toggleNavbar: toggleNavbar
};
export const Navigationreducer = (state = initialState, action) => {
    switch (action.type) {
        case navigationAction.TOGGLE_CLICK_NAVBAR:
            return {
                ...state,
                toggleNavbar: action.payload
            }
    }
    return state;
};

const mapStateToProps = (state) => {
    return {
        data: state
    }
}
const mapDispatchToProps = () => {
    return ({
        toggleNav: (data) => {
            return {
                type:navigationAction.TOGGLE_CLICK_NAVBAR,
                payload:data
            }
        }
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
