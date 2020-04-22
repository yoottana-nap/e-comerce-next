import { connect } from 'react-redux';
import Navigation from './Navigation';

const navigationItems = [
    { keyTitle: "home", routePath: "/index" },
    { keyTitle: "category", routePath: { Pants: "Pants", Bags: "Bags" } },
    { keyTitle: "signup", routePath: "/signin" },
    { keyTitle: "signin", routePath: "/signin" },
    { keyTitle: "cart", routePath: "/signin" },
    { keyTitle: "order", routePath: "/signin" }
];

export const initialState = {
    navigationItems: navigationItems,
};

export const Navigationreducer = (state = initialState, action) => {
    switch (action.type) { }
    return state;
};

const mapStateToProps = (state) => {
    return {
        data: state
    }
}

export default connect(mapStateToProps)(Navigation);
