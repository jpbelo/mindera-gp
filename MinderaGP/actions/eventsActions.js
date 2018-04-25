import axios from "axios";


export function fetchEvents() {
  return function(dispatch) {
    dispatch({type: "FETCH_EVENTS"});

    axios.get("https://react.joaobelo.pt/events")
      .then((response) => {
        dispatch({type: "FETCH_EVENTS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_EVENTS_REJECTED", payload: err})
      })

  }
}

export function fetchDayGalleries(dayID) {
  return function(dispatch) {
    dispatch({type: "FETCH_DAY_GALLERIES"});

    axios.get("https://react.joaobelo.pt/days/" + dayID)
      .then((response) => {
        dispatch({type: "FETCH_DAY_GALLERIES_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_DAY_GALLERIES_REJECTED", payload: err})
      })

  }
}

export function fetchGallery(galleryID) {
  return function(dispatch) {
    dispatch({type: "FETCH_GALLERY"});

    axios.get("https://react.joaobelo.pt/galleries/" + galleryID)
      .then((response) => {
        dispatch({type: "FETCH_GALLERY_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_GALLERY_REJECTED", payload: err})
      })

  }
}
