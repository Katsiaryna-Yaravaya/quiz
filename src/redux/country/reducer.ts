import * as types from './types'

const INITIAL_STATE = {
    country: null
}

const countryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.countryActionTypes.GET_COUNTRY:
            return {
                ...state,
                country: action.payload
            }
        default:
            return state
    }
}

export default countryReducer