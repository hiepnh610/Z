import axios from 'axios';

const GET = async ({path, params}) => {
  try {
    return axios.get(path, {params});
  } catch (error) {
    return error;
  }
};

const POST = async ({path, params}) => {
  try {
    return axios.post(path, params);
  } catch (error) {
    return error;
  }
};

export default {
  GET,
  POST,
};
