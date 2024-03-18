/* eslint-disable no-case-declarations */
import { BOOKING, CANCEL } from "./actionTypes";

const initialState = {
  data: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKING:
      const newData = [...state.data];
      newData.push(action.payload);
      return { data: newData };
    case CANCEL:
      const filteredData = state.data.filter((c) => c.id !== action.payload);
      return { data: filteredData };
    default:
      return state;
  }
};

export default bookingReducer;
