const initialState = {
  fetching: false,
  person: null,
  error: null
};

const imageReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "RANDOM_IMAGE":
      console.log("Rendering the new image");
      return { ...state, fetching: true, error: null };

    case "RANDOM_IMAGE_SUCCESS":
      return { ...state, fetching: false, person: action.person.results[0] };

    case "RANDOM_IMAGE_FAILURE":
      return { ...state, fetching: false, error: action.error };
  }
  return newState;
};

export default imageReducer;
