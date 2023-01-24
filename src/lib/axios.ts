import axios from "axios";

export const api = axios.create({
    baseURL:'http://localhost:3333'
    //To test is necessary to change IP as same used for Expo/Metro
})