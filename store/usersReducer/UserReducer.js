const userAction = {
    LOAD_DATA_USER: "LOAD_DATA_USER",
}
const userData = {};

export const initialState = {
    userData: userData
};

export const UserReducer = (state = initialState, action) => {
    if (action.type === userAction.LOAD_DATA_USER) {
        return {
            ...state,
            userData: action.payload
        }
    }

    return state;
};

export const mapDispatchToProps = {

    loadedDataUser: (data) => {
        return {
            type: userAction.LOAD_DATA_USER, payload: data
        }
    },

}