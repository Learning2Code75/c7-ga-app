// import * as api from "../../api";

import { wait } from "../../utils/helpers";
import { eventsData } from "../../__mocks__/events";
export const getEvents =
  (user, s, f = (msg) => {}) =>
  async (dispatch, getState) => {
    user = getState()?.auth?.user;
    console.log(user);
    try {
      // const { data } = await api.fetchUsers();
      await wait(2000);
      let data = eventsData;
      let userEventIds = [...user.events];
      console.log(userEventIds);
      data = data.filter((d) => userEventIds.includes(d.id));

      dispatch({ type: "FETCH_ALL_EVENTS", payload: data });
      s();
    } catch (err) {
      f(err);
      console.log(err);
    }
  };
export const createEvent = (formData) => async (dispatch) => {
  try {
    // const { data } = await api.signUp(formData);
    // dispatch({ type: "CREATE_USER", payload: data.result.data });
  } catch (error) {
    console.log(error);
  }
};
export const updateEvent = (userId, userData) => async (dispatch) => {
  try {
    // console.log(userId, userData);
    // const { data } = await api.updateUser(userId, userData);
    // console.log(data);
    // dispatch({ type: "UPDATE_USER", payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const deleteEvent = (userId) => async (dispatch) => {
  try {
    // console.log(userId);
    // await api.deleteUser(userId);
    // dispatch({ type: "DELETE_USER", payload: { userId } });
  } catch (err) {}
};
