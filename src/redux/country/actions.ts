import * as types from './types'

export const saveCountry = country => ({
    type: types.countryActionTypes.GET_COUNTRY,
    payload: country
})