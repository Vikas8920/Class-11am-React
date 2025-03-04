const initailState = {
    isAuthenticated: false,
    user: null,
}

const authReducer = (state = initailState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            }
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            }
        default:
            return state;
    }
}

export default authReducer;
