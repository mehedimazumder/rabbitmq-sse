'use string';

module.exports = ({AppError, appCodes}) => {
  const axios = require('axios');

  return async ({url, method, fields}) => {
    Object.keys(fields).forEach(key => fields[key] === undefined && delete fields[key]);

    let params = method === 'get' || method === 'delete' ? fields : null;
    let data = method === 'get' || method === 'delete' ? null : fields;

    let res = {};

    return await axios({
      url: url,
      headers: {
        'Content-Type': 'application/json'
      },
      method: method,
      params: params,
      data: data
    }).then(response => {

        res['status'] = response.status;
        res['body'] = response.data;

        return res;
    }).catch(err => {

        if (err.response) {
            res['status'] = err.response.status;
            res['body'] = err.response.data;
        } else {
            res['status'] = appCodes.INTERNAL_SERVER_ERROR.httpCode;
            res['body'] = appCodes.INTERNAL_SERVER_ERROR.details;
        }

        return res;
    });
  };
};
