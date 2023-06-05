const initialState = [];

const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATES':
      return action.payload;
    default:
      return state;
  }
};

export default dateReducer