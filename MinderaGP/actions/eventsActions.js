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
