import { combineReducers } from "redux"

import events from "./eventsReducer"
import days from "./daysReducer"

export default combineReducers({
  events,
  days,
})
