const comments = (state = [], action) => {
  switch(action.type){
    case 'SELECT_COMMENT':
      return state;
      // return {
      //   ...state,
      //   selected: true
      // };
    default:
      return state;
  }
};

export default comments;