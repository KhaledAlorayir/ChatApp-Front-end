const initalState = { name: "", room: "" };

const chat = (state = initalState, action) => {
  switch (action.type) {
    case "SET":
      return { ...state, name: action.payload.name, room: action.payload.room };

    default:
      return state;
  }
};

export default chat;
