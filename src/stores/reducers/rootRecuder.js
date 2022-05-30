const initState = {
  users: [
    {
      id: 1,
      name: "manhhung",
    },
    {
      id: 2,
      name: "hary",
    },
    {
      id: 3,
      name: "eric",
    },
    {
      id: 4,
      name: "niric",
    },
  ],
  posts: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      let users = state.users.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        users,
      };
    case "CREATE_USER":
      let id = Math.floor(Math.random() * 1001);
      let user = {
        id: id,
        name: `dao manh hung ${id}`,
      };
      return {
        ...state,
        users: [...state.users, user],
      };
    default:
      return state;
  }
};
export default rootReducer;
