import axios from 'axios'
import {
    Message
} from 'element-ui';

const server = "http://localhost:8080"

const GET = 'GET'
const POST = 'POST'
const PUT = 'PUT'
const DELETE = 'DELETE'
const PATCH = 'PATCH'

export default {
    request,
    getLimitAtivities,
}


async function request(method, url, data) {
    try {
      const token = window.localStorage.token
      const headers = token ? {
        Authorization: `Bearer ${token}`
      } : {}
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
        data: data,
        headers: headers
      })
      console.log(res);
      var mes = res;
      if (res.status < 400) {
        if (res.data.code && res.data.code < 400) {
          return res
        } else {
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

async function getLimitAtivities(type) {
    
}
