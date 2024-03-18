import { BOOKING, CANCEL } from "./actionTypes";

export const makeBooking = (data) => {
  return {
    type: BOOKING,
    payload: data,
  };
};

export const cancelBooking = (id) => {
  return {
    type: CANCEL,
    payload: id,
  };
};
