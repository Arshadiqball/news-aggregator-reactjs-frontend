import { 
  SET_USER_PREFERENCES_SUCCESS,
  SET_USER_PREFERENCES_REQUEST,
  SET_USER_PREFERENCES_FAILURE
} from '../action/actionTypes'

const initialState = {
  userPreferences: {
    category: '',
    source: ''
  }
}

const userPreferences = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PREFERENCES_SUCCESS:
      return {
        ...state,
        user: action.payload.articles,
        query: action.payload.query,
        loading: false,
      }
    case SET_USER_PREFERENCES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case SET_USER_PREFERENCES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}

export default userPreferences
