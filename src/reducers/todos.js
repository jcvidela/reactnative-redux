const initialState = [
  { id: "1", desc: "todo 1", completed: false },
  { id: "2", desc: "todo 2", completed: false },
  { id: "3", desc: "todo 3", completed: false },
];

const types = {
  COMPLETE: "COMPLETE",
};

export const complete = (id) => ({
  type: types.COMPLETE,
  payload: id,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((x) => {
        return x.id === action.payload ? { ...x, completed: !x.completed } : x;
      });

    default:
      return state;
  }
};
