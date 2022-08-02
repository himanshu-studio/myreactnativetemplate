import {GET_USER_LIST} from './Constants';

const initialState = {
  userList: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST: {
      return {
        ...state,
        userList: action.userList,
      };
    }
    default: {
      return state;
    }
  }
};

export default UserReducer;
