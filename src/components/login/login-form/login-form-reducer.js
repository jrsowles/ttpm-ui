const initialState = {
    isLoading: false,
    error: ''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        // PENDING

        case 'LOGIN_PENDING':
         {
            state = {
                ...state,
                isLoading: true,
                error: ''
            };
            break;
        }

        // FULFILLED

        case 'LOGIN_FULFILLED': {
            localStorage.setItem('username', action.payload['userName']);
            localStorage.setItem('token', action.payload['access_token']);

            state = {
                ...state,
                isLoading: false,
                error: ''
            };
            break;
        }

        // REJECTED

        case 'LOGIN_REJECTED': {
            state = {
                ...state,
                isLoading: false,
                error: 'Failed to log in.'
            };
            break;
        }
    }

    return state;
}
