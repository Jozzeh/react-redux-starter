// Here comes the logic of making a call towards an API  (fetching data)
// The reason this is in a seperate file is because it is common to add certain headers to each call (example: api key headers)

// EXAMPLE
import merge from 'merge';

class Client {
  options = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  constructor(options = {}) {
    this.options = options;
  }

  call = (route, options = this.options) => {
    let mergedOptions = merge(options, this.options);

    console.log(`Start call: ${route} ----------------------------------`);
    console.log(mergedOptions);
    return fetch(`${route}`, mergedOptions)
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
  };

  get = (route, options) => {
    return this.call(route, merge(options, { method: "GET" }));
  };

  post = (route, options) => {
    return this.call(route, merge(options, { method: "POST" }));
  };

  delete = (route, options) => {
    return this.call(route, merge(options, { method: "DELETE" }));
  };

  patch = (route, options) => {
    return this.call(route, merge(options, { method: "PATCH" }));
  };

  put = (route, options) => {
    return this.call(route, merge(options, { method: "PUT" }));
  };
}

export default Client;
