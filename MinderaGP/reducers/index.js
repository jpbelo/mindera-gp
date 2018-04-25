import { combineReducers } from "redux"

import events from "./eventsReducer"
import days from "./daysReducer"
import galleries from "./galleriesReducer"

export default combineReducers({
  events,
  days,
  galleries,
})
