import axios from 'axios';
let base='http://119.3.187.81:8181/admin-service/api/';
import qs from 'qs'

export const sendLoginMessage=data=>{
    return axios({
        url:`${base}/account/admin/login/normal`,
        method:'post',
        data:qs.stringify(data),
        headers:{},
    }).then(res=>res.data);
}