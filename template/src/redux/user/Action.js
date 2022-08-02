import Urls from '../../network/NetworkUrls';
import NetworkManager from '../../network/NetworkManager';
import {GET_USER_LIST} from './Constants';
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
