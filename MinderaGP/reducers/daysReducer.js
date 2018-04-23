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
          events: action.payload,
        }
      }


    }

    return state
}
