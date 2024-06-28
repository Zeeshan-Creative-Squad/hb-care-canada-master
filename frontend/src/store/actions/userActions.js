import Settings from "../../components/CommonAPICalls/Settings";
import SystemApiCallSettings from "../../components/CommonAPICalls/SystemApiCallSettings";

const handleLoginSuccess = (dispatch, loginResponseData=[], userResponseData=[], moduleResponseData=[]) => {
  const payload = {
    user_type_id: loginResponseData.user_type_id,
    user_id: loginResponseData.user_id,
    token: loginResponseData.token,
    email: loginResponseData.email,
    usersList: userResponseData ? userResponseData?.data : [],
    modulesList: moduleResponseData ? moduleResponseData?.data : []
  };

  dispatch({
    type: "USER_LOGIN_SUCCESS",
    payload,
  });

  localStorage.setItem("userInfo", JSON.stringify(payload));
};

export const login = (userLogin) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "USER_LOGIN_REQUEST",
      });

      const loginResponseData = await SystemApiCallSettings('POST', Settings.apiBaseUrl + '/login', {}, true, userLogin);

      if (loginResponseData.user_id === 3) {
        const moduleResponseData = await SystemApiCallSettings('GET', Settings.apiBaseUrl+'/get_api_document');
        const userResponseData = await SystemApiCallSettings('GET', Settings.apiBaseUrl + '/', {
          user_type_id: loginResponseData.user_type_id,
          user_id: loginResponseData.user_id,
          token: loginResponseData.token,
        });

        handleLoginSuccess(dispatch, loginResponseData, userResponseData, moduleResponseData);
      } else {
        handleLoginSuccess(dispatch, loginResponseData);
      }
    } catch (error) {
      dispatch({
        type: "USER_LOGIN_FAIL",
        payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: "USER_LOGOUT" });
    dispatch({ type: "USER_DETAILS_RESET" });
  };
}; 