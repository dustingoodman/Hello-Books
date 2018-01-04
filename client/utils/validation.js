import axios from 'axios';
import notifyNetworkError from '../actions/notifyNetworkError';

const API_URL = '/api/v1/users';

/**
 * @description - Check if username exists
 *
 * @param {object} detail - user details
 *
 * @returns {String} - String
 */
export function checkUserExist(detail) {
  return axios
    .post(`${API_URL}/validate`, detail)
    .then(response => response.data)
    .catch(error => (error.response ?
      error.response.data.message :
      notifyNetworkError(error)));
}

/**
 *
 * @description - Check if email exists
 *
 * @param {object} detail - User email
 *
 * @returns {String} - String
 */
export function checkEmailExist(detail) {
  return axios
    .post(`${API_URL}/getemail`, detail)
    .then(response => response.data)
    .catch(error => notifyNetworkError(error));
}
