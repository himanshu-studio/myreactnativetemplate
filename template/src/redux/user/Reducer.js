import {GET_USER_LIST, SAVE_REGISTER_SCREEN_DATA, SAVE_SCREEN3_DATA} from './Constants';

const initialState = {
  userList: [],
  registerData: null,
  screen3Data: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST: {
      return {
        ...state,
        userList: action.userList,
      };
    }
    case SAVE_REGISTER_SCREEN_DATA: {
      return {
        ...state,
        registerData: action.registerData,
      };
    }
    case SAVE_SCREEN3_DATA: {
      return {
        ...state,
        screen3Data: action.screen3Data,
      };
    }
    default: {
      return state;
    }
  }
};

export default UserReducer;
