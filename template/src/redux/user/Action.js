import Urls from '../../network/NetworkUrls';
import NetworkManager from '../../network/NetworkManager';
import {GET_USER_LIST, SAVE_REGISTER_SCREEN_DATA, SAVE_SCREEN3_DATA} from './Constants';
import {parseUserList} from './ParseData';

export const getUserList =
  (onSuccess = () => {}, onError = () => {}) =>
  async dispatch => {
    const apiResponse = await NetworkManager.get(Urls.userList);
    if (apiResponse?.length) {
      dispatch({
        type: GET_USER_LIST,
        userList: parseUserList(apiResponse),
      });
      onSuccess();
    } else {
      onError();
    }
  };

export const saveRegisterScreenData = (data) => {
  return {
    type: SAVE_REGISTER_SCREEN_DATA,
    registerData: data,
  }
} 

export const saveScreen3Data = (data) => {
  return {
    type: SAVE_SCREEN3_DATA,
    screen3Data: data,
  }
} 