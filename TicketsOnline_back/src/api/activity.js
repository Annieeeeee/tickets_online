import axios from 'axios';

let base = 'http://119.3.187.81:8181/user-service/api/';
let base1='http://119.3.187.81:8181/admin-service/api/';
/*
export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };
*/

export const getActivities=params=>{
    return axios.get(`${base}/activities`);
};

export const getComments=activityId=>{
    return axios.get(`${base1}/comments/`+activityId);
};


