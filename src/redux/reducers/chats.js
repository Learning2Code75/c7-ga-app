export default (chats = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_CHATS":
      return action.payload;
    case "CREATE_CHAT":
      return [...chats, action.payload];
    case "UPDATE_CHAT":
      return chats.map((eve) =>
        eve.id === action.payload.id ? action.payload : eve
      );
    case "DELETE_CHAT":
      return chats.filter((eve) => eve.id !== action.payload.id);
    default:
      return chats;
  }
};
