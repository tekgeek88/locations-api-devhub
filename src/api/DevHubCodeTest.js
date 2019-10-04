import axios from 'axios';

export default axios.create({
  baseURL: 'https://dh-code-test.s3-us-west-2.amazonaws.com/',
});