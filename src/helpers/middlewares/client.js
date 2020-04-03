// Here comes the logic of making a call towards an API  (fetching data)
// The reason this is in a seperate file is because it is common to add certain headers to each call (example: api key headers)

// EXAMPLE
import merge from "merge";
import axios from "axios";

class Client {
  options = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  constructor(options = {}) {
    this.options = options;
  }

  call = (options = this.options) => {
    let mergedOptions = merge(options, this.options);

    console.log(`Start call: ----------------------------------`);
    console.log(mergedOptions);
    return axios(mergedOptions)
      .then(response => {
        console.log(response);
        return new Promise((resolve, reject) => {
          resolve(response);
        });
      })
      .catch(error => {
        console.log(error);
      });
    /*
      .then(response => {
        if (response.status === 204) {
          return { statusCode: response.status, json: [] };
        }
        return response
          .json()
          .then(json => ({ statusCode: response.status, json }));
      })
      .then(response => {
        return new Promise((resolve, reject) => {
          resolve(response);
        });
      });
      */
  };

  get = (route, options = {}) => {
    return this.call(merge(options, { method: "get", url: route }));
  };

  post = (route, options = {}) => {
    return this.call(merge(options, { method: "post", url: route }));
  };

  delete = (route, options = {}) => {
    return this.call(merge(options, { method: "delete", url: route }));
  };

  patch = (route, options = {}) => {
    return this.call(merge(options, { method: "patch", url: route }));
  };

  put = (route, options = {}) => {
    return this.call(merge(options, { method: "put", url: route }));
  };
}

export default Client;
