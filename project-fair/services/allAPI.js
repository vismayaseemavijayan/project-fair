
import {commonAPI} from "./commonAPI"
import { server_url } from "./server_url"
//RegisterAPI
export const registerAPI=async(user)=>{
    return await commonAPI("POST",`${server_url}/register`,user,"")
}
//loginAPI
export const loginAPI=async(user)=>{
    return await commonAPI("POST",`${server_url}/login`,user,"")
}
// add project
export const addprojectAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${server_url}/addproject`,reqBody,reqHeader)
}
// gethomeproject
export const getHomeProjectAPI= async ()=>{
    return await commonAPI('GET',`${server_url}/homeproject`,"","")
}
// getuserproject
export const getUserProjectAPI= async (reqHeader)=>{
    return await commonAPI('GET',`${server_url}/userproject`,"",reqHeader)
}
// get allproject

export const getAllProjectAPI= async (reqHeader)=>{
    return await commonAPI('GET',`${server_url}/allproject`,"",reqHeader)
}
