export const updateAuth =
  (payload, s, f = (msg) => {}) =>
  async (dispatch) => {
    try {
      // const { data } = await api.signUp(formData);
      if (true) {
        dispatch({ type: "UPDATE_AUTH", payload });
      } else {
        f("Username not valid");
      }
      s();
    } catch (error) {
      f("Username not valid");
      console.log(error);
    }
  };
