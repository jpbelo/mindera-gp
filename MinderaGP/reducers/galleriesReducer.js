initialState = {
  items: [],
  loading: false,
  loaded: false,
  error: null,
}

export default function reducer(state=initialState, action) {

    switch (action.type) {
      case "FETCH_GALLERY": {
        return {
          ...state,
          loading: true
        }
      }
      case "FETCH_GALLERY_REJECTED": {
        return {
          ...state,
          loading: false,
          error: action.payload
        }
      }
      case "FETCH_GALLERY_FULFILLED": {
        return {
          ...state,
          loading: false,
          loaded: true,
          items: action.payload,
        }
      }

    }

    return state
}
