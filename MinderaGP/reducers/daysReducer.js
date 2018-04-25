initialState = {
  dayGalleries: [],
  loading: false,
  loaded: false,
  error: null,
}

export default function reducer(state=initialState, action) {

    switch (action.type) {
      case "FETCH_DAY_GALLERIES": {
        return {
          ...state,
          loading: true
        }
      }
      case "FETCH_DAY_GALLERIES_REJECTED": {
        return {
          ...state,
          loading: false,
          error: action.payload
        }
      }
      case "FETCH_DAY_GALLERIES_FULFILLED": {
        return {
          ...state,
          loading: false,
          loaded: true,
          dayGalleries: action.payload,
        }
      }

    }

    return state
}
