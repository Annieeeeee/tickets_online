import axios from 'axios'
import {
    Message
} from 'element-ui';

const server = "http://localhost:8181/user-service"

const GET = 'GET'
const POST = 'POST'
const PUT = 'PUT'
const DELETE = 'DELETE'
const PATCH = 'PATCH'

export default {
    request,
    getLimitActivities,
    getActivity,
    getAuthority,
}


async function request(method, url, data) {
    try {
      const token = window.localStorage.token
      const headers = token ? {
        Authorization: `Bearer ${token}`
      } : {}
      console.log('headers:',headers)
      if (!url.match(/^http|\/\//g)) {
        url = server + url
      }
      console.log(method);
      console.log(url);
      console.log(token);
      console.log(data);
      const res = await axios({
        method: method,
        url: url,
        data: stringify(data),
        headers: headers
      })
      console.log(res);
      var mes = res;
      if (res.status < 400) {
        return res;
        if (res.data.code && res.data.code < 400) {
          return res
        } else {
          console.log(`first`)
          throw (res.data)
        }
      } else {
        throw ({
          message: res.statusText
        })
      }
    } catch (err) {
      console.log("get status")
      console.log(err)
  
      Message({
        message: err.message,
        type: 'error',
        duration: 1000
      });
    }
}

async function getLimitActivities(type) {
  const res = await request(GET, '/api/activities/basic?limit=3&variety='+type);
  return res;
}

async function getActivity(id) {
  const res = await request(GET, '/api/activities/'+id);
  return res;
}

async function getAuthority(form) {
  console.log(form);
  const res = await request(POST, '/api/account/login', form.data)
  console.log("loginRes", res);
  return res.data.data
}