const initialState = {
  age: 21
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "AGE_UP_ASYNC":
      return {
        ...state,
        age: newState.age + 1
      };

    case "AGE_DOWN":
      return {
        ...state,
        age: newState.age - 1
      };
  }

  return newState;
};

export default reducer;
