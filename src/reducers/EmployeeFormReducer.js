import {
    EMPLOYEE_UPDATE,
    RESET_FORM,
    EMPLOYEE_CREATE_LOADING,
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case RESET_FORM:
            return INITIAL_STATE;
        case EMPLOYEE_CREATE_LOADING:
            return { ...state, loading: true };
        default:
            return state;
    }
};
