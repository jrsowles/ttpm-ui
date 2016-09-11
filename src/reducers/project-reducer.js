const initialState = {
    projects: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        // PENDING
        case 'FETCH_PROJECTS_PENDING':
        case 'ADD_PROJECT_PENDING':
        case 'DELETE_PROJECT_PENDING': {
            state = {
                ...state
            };
            break;
        }

        // FULFILLED
        case 'FETCH_PROJECTS_FULFILLED': {
            state = {
                ...state,
                projects: action.payload || []
            };
            break;
        }

        case 'ADD_PROJECT_FULFILLED':
        case 'DELETE_PROJECT_FULFILLED': {
            state = {
                ...state
            };
            break;
        }

        // REJECTED
        case 'FETCH_PROJECTS_REJECTED':
        case 'ADD_PROJECT_REJECTED':
        case 'DELETE_PROJECT_REJECTED': {
            state = {
                ...state
            };
            break;
        }
    }

    return state;
}
