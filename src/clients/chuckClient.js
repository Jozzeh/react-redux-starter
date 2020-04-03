/* istanbul ignore file */
import client from '../helpers/middlewares/client';
import {Links} from '../constants/links';

const getClient = () => {
  return new client();
};

const getRandomQuote = () => {
  return getClient().get(Links.chuckApi);
};

const getSpecificQuote = (firstname, lastname) => {
  const specificChuckLink = Links.chuckApi.replace("Chuck", firstname).replace("Norris", lastname);
  return getClient().get(specificChuckLink);
};

const chuckClient = {
  getRandomQuote,
  getSpecificQuote
};

export default chuckClient;