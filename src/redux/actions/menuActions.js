const menuActions = {
  setActiveMenu: activemenu => {
    return dispatch => {
      dispatch({
        type: 'SET_ACTIVE_MENU',
        active: activemenu
      });
    };
  },
};

export default menuActions;