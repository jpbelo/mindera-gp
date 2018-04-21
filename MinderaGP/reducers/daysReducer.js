initialState = {
  daylists: [],
  loading: false,
  loaded: false,
  error: null,
}

export default function reducer(state=initialState, action) {

    switch (action.type) {
      case "FETCH_DAY_LISTS": {
        return {
          ...state,
          loading: true
        }
      }
      case "FETCH_DAY_LISTS_REJECTED": {
        return {
          ...state,
          loading: false,
          error: action.payload
        }
      }
      case "FETCH_DAY_LISTS_FULFILLED": {
        return {
          ...state,
          loading: false,
          loaded: true,
          daylists: action.payload,
        }
      }



      case "FETCH_LIST": {
        return {
          ...state,
          loading: true
        }
      }
      case "FETCH_LIST_REJECTED": {
        return {
          ...state,
          loading: false,
          error: action.payload
        }
      }
      case "FETCH_LIST_FULFILLED": {
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
