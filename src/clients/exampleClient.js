// a client is a collection of API routes 

// EXAMPLE of login/logout client
import client from '../helpers/middlewares/client';
import globalVars from '../constants/exampleConstants';

const getClient = () => {
  return new client();
};

const loginUser = (email, password) => {
  return getClient().post(`${globalVars.BASE_URL}/api/login`, {
    body: JSON.stringify({
      Email: email,
      Password: password,
    }),
  });
};

const logoutUser = loginID =>
  getClient().post(`${baseUrl}/api/logout`, {
    body: JSON.stringify({
      id: loginID,
    }),
  });

const auth = {
  loginUser,
  logoutUser,
};

export default auth;