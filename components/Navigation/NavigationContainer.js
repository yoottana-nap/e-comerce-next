import { connect } from 'react-redux';
import Navigation from './Navigation';

// // Pattern Dispatch
// const navigationAction = {
//     TOGGLE_CLICK_NAVBAR: "TOGGLE_CLICK_NAVBAR"
// }

const navigationItems = [
    { keyTitle: "home", routePath: "/index" },
    { keyTitle: "category", routePath: "" },
    { keyTitle: "signup", routePath: "/signin" },
    { keyTitle: "singin", routePath: "/signin" },
    { keyTitle: "cart", routePath: "/signin" },
    { keyTitle: "order", routePath: "/signin" }
];

export const initialState = {
    navigationItems: navigationItems,
};
export const Navigationreducer = (state = initialState, action) => {
    switch (action.type) {
        // // Pattern Dispatch
        // case navigationAction.TOGGLE_CLICK_NAVBAR:
        //     return {
        //         ...state,
        //         toggleNavbar: action.payload
        //     }
    }
    return state;
};

const mapStateToProps = (state) => {
    return {
        data: state
    }
}
// Pattern Dispatch
// const mapDispatchToProps = () => {
//     return ({
//         toggleNav: (data) => {
//             return {
//                 type: navigationAction.TOGGLE_CLICK_NAVBAR,
//                 payload: data
//             }
//         }
//     })
// }
export default connect(mapStateToProps)(Navigation);
