const initialState = [
  { id: "1", desc: "todo 1", completed: false },
  { id: "2", desc: "todo 2", completed: false },
  { id: "3", desc: "todo 3", completed: false },
];

const types = {
  COMPLETE: "COMPLETE",
  SUBMIT: "SUBMIT",
};

export const complete = (id) => ({
  type: types.COMPLETE,
  payload: id,
});

export const submit = (text) => ({
  type: types.SUBMIT,
  payload: {
    id: Math.random(40).toString(),
    desc: text,
    completed: false,
  },
});

export default (state = initialState, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((x) => {
        return x.id === action.payload ? { ...x, completed: !x.completed } : x;
      });
    case "SUBMIT":
      return [action.payload].concat(state);

    default:
      console.log(action)
      return state;
  }
};
