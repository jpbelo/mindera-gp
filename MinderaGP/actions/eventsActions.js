import axios from "axios";

export function fetchEvents() {
  return function(dispatch) {
    dispatch({type: "FETCH_EVENTS"});

    axios.get("http://rest.learncode.academy/api/reacttest/tweets")
      .then((response) => {
        dispatch({type: "FETCH_EVENTS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_EVENTS_REJECTED", payload: err})
      })


  }
}
