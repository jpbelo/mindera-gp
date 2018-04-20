initialState = {
  events: [],
  loading: false,
  loaded: false,
  error: null,
}

export default function reducer(state=initialState, action) {

    switch (action.type) {
      case "FETCH_EVENTS": {
        return {
          ...state,
          loading: true
        }
      }
      case "FETCH_EVENTS_REJECTED": {
        return {
          ...state,
          loading: false,
          error: action.payload
        }
      }
      case "FETCH_EVENTS_FULFILLED": {
        return {
          ...state,
          loading: false,
          loaded: true,
          events: action.payload,
        }
      }
    }

    return state
}
