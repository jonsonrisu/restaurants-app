import axios from "axios";

const API_URL = "http://localhost:3000/api/services/";

const getServicesList = () =>{
   return axios.get(
        API_URL + 'list',
  );
}

const addServices = (data) =>{
  return axios.post(
       API_URL + 'create',
       data
   )
}

const Services = {
    getServicesList,
    addServices
 
  }
export default Services